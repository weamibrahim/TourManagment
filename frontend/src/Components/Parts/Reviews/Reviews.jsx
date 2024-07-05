import {useEffect, useState} from "react";
import "./Reviews.css"

function Reviews() {

  
    // const [reviews, setReviews] = useState([])

    // useEffect(() => {
    //     fetch(`http://localhost:7000/api/review/Reviews/${tourId}`)   
    //         .then(res => res.json())
    //         .then(data => {
    //             setReviews(data)
    //             console.log(data)
    //         })

    // }, [])
    return (
        <div>
            <h1>Reviews</h1>
            {/* {reviews.map((review) => {  
                     
                    <div>
                       
                        <p>{review.ReviewText}</p>
                        <p>{review.Rating}</p>
                    </div>
                 
            })} */}

        </div>

    )
}

export default Reviews