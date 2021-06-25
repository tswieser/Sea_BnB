import ReactStars from "react-rating-stars-component";
import { useEffect, useState } from 'react';
import reviewReducer, { updateReview } from '../../store/reviews';
import { useDispatch } from 'react-redux'
import './reviewModal.css'


function ReviewEdit({ reviewId, user_id, dock_id }) {
    const [rating, setRating] = useState(null)
    const [review, setReview] = useState('')
    const dispatch = useDispatch()






    const handleReviewSubmit = async (e) => {
        let id = reviewId

        e.preventDefault();

        const data = {
            id,
            rating,
            review,
            user_id,
            dock_id

        };


        const info = await dispatch(updateReview(data))




        const resetValues = () => {
            setRating(null);
            setReview('');
        };
        resetValues()
    }




    return (

        <div className="form_container">
            <form onSubmit={handleReviewSubmit}>
                <h2 id="edit_title"> Edit Review </h2>
                <label className="star_div">
                    <ReactStars
                        count={5}
                        onChange={setRating}
                        size={45}
                        isHalf={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        fullIcon={<i className="fas fa-star"></i>}
                        activeColor='#E04562'
                    />
                </label>
                <textarea onKeyUp={(e) => setReview(e.target.value)} rows="10" cols='50' placeholder="Leave Your Review Here"></textarea>

                <button type="submit" className="submit_btn" >Submit Review </button>
            </form>
        </div>


    )

}

export default ReviewEdit