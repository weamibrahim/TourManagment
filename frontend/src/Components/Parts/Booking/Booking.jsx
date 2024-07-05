import { useState } from 'react';
///import { useNavigate } from 'react-router-dom';
import Checkout from '../../Pages/Checkout/Checkout';
function Booking({ dataOfTour }) {
    console.log({dataOfTour})
    const tour = dataOfTour;
    const priceOfTour= tour.price
    const [dataOfBooking, setDataOfBooking] = useState({});
    const accessToken = JSON.parse(localStorage.getItem("accessToken"));
    //const navigate = useNavigate();
    const [inputs, setInputs] = useState({
       
        name:'',
        phone: '',
        GroupSize: '',
        DateOfTour: '',

       
    });
    console.log("price",tour.price)


    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {

        const bookingDetails = {
            ...inputs,
            price:priceOfTour,
            nameOfTour:tour.title
           
        };
        event.preventDefault();
        fetch(`http://localhost:7000/api/booking/create/${tour._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${accessToken}`
            },
            body: JSON.stringify(bookingDetails)
        }).then((res) => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        }).then((data) => {
            console.log("checkout", data.booking._id);
            setDataOfBooking(data.booking);
            // Redirect to checkout with booking data
           // navigate(`/checkout`, { state: data.booking });
        }).catch((error) => {
            console.error("Error:", error);
        });
    };

    return (
        <div>
            <span className="fw-bold fs-1">${tour.price}</span><span className="fs-3"> /per people</span>
            <hr />
            <div>
                <h2>Information</h2>
                <form onSubmit={handleSubmit}>

                <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" className="form-control" id="name" onChange={handleInputChange} name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="text" className="form-control" id="phone" onChange={handleInputChange} name="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="GroupSize" className="form-label">Group Size</label>
                        <input type="text" className="form-control" id="GroupSize"  onChange={handleInputChange} name="GroupSize" min="1" max={tour.maxGroupSize}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="DateOfTour" className="form-label">Date</label>
                        <input type="date" className="form-control" id="DateOfTour" onChange={handleInputChange} name="DateOfTour" />
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between'>
                    <div>${priceOfTour} x {inputs.GroupSize} person </div>
                    <div>${priceOfTour * inputs.GroupSize}</div>
                    </div>
                    <div className='d-flex justify-content-between my-3'>
                    <div>Service charge </div>
                    <div>$20</div>
                    </div>
                    <hr/>
                    <div className='d-flex justify-content-between my-3'>
                    <div>Total </div>
                    <div>${20+priceOfTour * inputs.GroupSize}</div>
                    </div>
                   <Checkout data={dataOfBooking}/> 
                </form>
            </div>
        </div>
    );
}

export default Booking;
