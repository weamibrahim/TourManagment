const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const stripePayment = async (req, res) => {
    // console.log(req.body)
    const {  price, nameOfTour,GroupSize,} = req.body;


    // Convert price to a number
    const unitAmount = Number(price) * 100;

    const lineItem = {
        price_data: {
            currency: "usd",
            product_data: {
                name: nameOfTour,
                metadata: {
                
                    userId: req.body.userId,
                    tourId: req.body.tourId,
                    userName: req.body.name,
                    phone: req.body.phone,
                    dateOfTour: req.body.DateOfTour,
                },
            },
            unit_amount: unitAmount,
        },
        quantity: GroupSize
    };

   // console.log("lineItem",lineItem)
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            shipping_address_collection: {
                allowed_countries: ["US", "CA", "KE"],
            },
            shipping_options: [
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 0,
                            currency: "usd",
                        },
                        display_name: "Free shipping",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 5,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 7,
                            },
                        },
                    },
                },
                {
                    shipping_rate_data: {
                        type: "fixed_amount",
                        fixed_amount: {
                            amount: 1500,
                            currency: "usd",
                        },
                        display_name: "Next day air",
                        delivery_estimate: {
                            minimum: {
                                unit: "business_day",
                                value: 1,
                            },
                            maximum: {
                                unit: "business_day",
                                value: 1,
                            },
                        },
                    },
                },
            ],
            phone_number_collection: {
                enabled: true,
            },
            line_items: [lineItem],
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/`,
            cancel_url: `${process.env.CLIENT_URL}/tours`,
        });

       // console.log("Stripe session created:", session);
        res.send({ url: session.url });
    } catch (error) {
        console.error("Error creating Stripe checkout session:", error);
        res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = {
    stripePayment,
};
