require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const {CreateBooking} = require('../Controller/BookingController');
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;
const WebhookController = {};

WebhookController.handleWebhook = async (req, res) => {
     console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);
  console.log('STRIPE_WEBHOOK_SECRET:', process.env.STRIPE_WEBHOOK_SECRET);
  
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the checkout session completion event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    try {
      // Retrieve line items from the session
      const lineItems = await stripe.checkout.sessions.listLineItems(session.id);

      console.log('Line items:', lineItems.data);
      console.log('Session metadata:', session.metadata);

      // Prepare booking data
      const bookingData = {
        userID: session.metadata.userId, 
        tourID: session.metadata.tourId,
        name: session.metadata.userName, 
        GroupSize: lineItems.data[0].quantity,
        price: session.amount_total / 100,
        phone: session.metadata.phone,
        DateOfTour: session.metadata.dateOfTour,
        nameOfTour: lineItems.data[0].description,
      };


    await  CreateBooking(bookingData);

      console.log('Booking successfully saved:', bookingData);
    } catch (err) {
      console.error('Error saving booking:', err);
      return res.status(500).send('Error saving booking');
    }
  }

  res.status(200).json({ received: true });
};

module.exports = WebhookController;
