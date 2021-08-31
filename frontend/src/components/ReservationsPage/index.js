import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getDocks } from '../../store/dock';
import { AddReservation } from '../../store/reservations';
import { AddReview, GetReviews, deleteReview } from '../../store/reviews';
import ReactStars from "react-rating-stars-component";
import { avgRating } from '../DocksPage'
import './ReservationPage.css'
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import EditFormModal from '../ReviewFormModal'
import { GetReservations } from '../../store/reservations'



const ReservationPage = () => {
    const { dockId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state.session)
    const dock = useSelector(state => state.dock[dockId])
    const reviews = useSelector(state => state.review)


    const [showModal, setShowModal] = useState(true);
    const [rating, setRating] = useState(null)
    const [review, setReview] = useState('')
    const [errors, setErrors] = useState()
    const [dateRange, setDateRange] = useState([null, null]);
    const [checkIn, checkOut] = dateRange;


    useEffect(async () => {
        await dispatch(getDocks());

    }, [dispatch, reviews])

    useEffect(() => {

    }, [review])

    const handleReservationSubmit = async (e) => {
        e.preventDefault();
        let user_id = state.user.id

        if (!checkIn || !checkOut) {
            setErrors('Please Enter a valid Date')
            return;
        }

        let start_date = format(checkIn, 'yyyy-MM-dd')
        let end_date = format(checkOut, 'yyyy-MM-dd')
        let dock_id = dockId

        const reservation = {
            start_date,
            end_date,
            dock_id,
            user_id
        }
        // history.push('/api/docks')

        const stayInfo = await dispatch(AddReservation(reservation))
        await dispatch(GetReservations())

        if (stayInfo) {
            history.push('/api/reservation')
        }

    }

    const handleReviewSubmit = async (e) => {
        let user_id = state.user.id
        let dock_id = dockId
        e.preventDefault();

        const data = {
            rating,
            review,
            user_id,
            dock_id
        };
        const reviewInfo = await dispatch(AddReview(data))
        console.log(reviewInfo)
        const resetValues = () => {
            setRating(null);
            setReview('');
        };
        resetValues()
    }

    const handleDeleteSubmit = async (id) => {

        const deletedReview = await dispatch(deleteReview(id))

    }


    if (!state.user) {
        return (
            <>
                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                        <LoginForm />
                    </Modal>
                )}
            </>
        );
    }


    function checkButtons(id, reviewId) {
        let user_id = state.user.id
        let dock_id = parseInt(dockId)
        if (user_id === id) {
            return (
                <>
                    <button className="review_btn" onClick={() => handleDeleteSubmit(reviewId)}>Delete</button>
                    <EditFormModal reviewId={reviewId} user_id={user_id} dock_id={dock_id} />
                </>
            )
        }
    }


    return (
        <>
            {dock && (< div className="main-container" >
                <h2 className="title">{dock.dock_name}</h2>

                <div className="basic_info_container">

                    <i className="fas fa-star"></i>
                    {avgRating(dock.Reviews)}&nbsp;
                    ({dock.Reviews.length} reviews)&nbsp;

                    <span> {dock.city}, {dock.state}, United States</span>

                </div>

                <div className="img_container">

                    <img
                        className="main_img"
                        src={dock.Images[1].url}
                    ></img>

                    {dock.Images.slice(1).map((dock) => (
                        <img
                            className="support_imgs"
                            src={dock.url}
                        ></img>
                    ))}

                </div>
                <div className="detailsContainer">
                    <div className="rightSide">
                        <div className="user_title">
                            <p>Private Dock Hosted by {dock.User.username}</p>
                        </div>
                        <div className="home">
                            <div>
                                <i class="fas fa-home" id="sicons" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p className="subTitle">Entire Home</p>
                                <p className="subDesc">You got dat hole shiz to yall self</p>
                            </div>
                        </div>
                        <div className="cancellation">
                            <div>
                                <i class="far fa-calendar-check" id="sicons" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p className="subTitle">Cancellation policy</p>
                                <p className="subDesc">If you cancel your stay your children will be cursed to die a cruel and lonely death</p>
                            </div>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum dolor sit amet, ex salutandi concludaturque mea, suas viderer ea ius. In sea idque corrumpit.
                                Eam autem causae dolorum et, malorum ocurreret no his. Paulo abhorreant ex nec, ei qui veritus imperdiet conceptam.
                                Postea hendrerit pertinacia sit an, menandri dissentias an usu. Ius detraxit eleifend disputationi cu, assum nusquam cu per,
                                id mollis postulant pertinacia nec. Ius ex odio eros saepe. Quando efficiendi id vix, ad wisi albucius nec,
                                at sed modus utroque detracto. An patrioque efficiendi usu, at novum timeam cum.</p>
                        </div>
                    </div>
                    <div className="leftSide">
                        <div className="reservation_form">
                            <div className="header">
                                <div>${dock.price}/ Night</div>
                                <div className="dock_rating">
                                    <i className="fas fa-star"></i>
                                    {avgRating(dock.Reviews)}
                                    ({dock.Reviews.length} reviews)
                                </div>
                            </div>
                            <div className="res_errors">
                                {errors ? errors : null}
                            </div>
                            <DatePicker
                                minDate={new Date()}
                                className="calender_input"
                                dateFormat="yyyy/MM/dd"
                                selectsRange={true}
                                placeholderText="Select Date Range"
                                startDate={checkIn}
                                endDate={checkOut}
                                selected={checkIn}
                                onChange={(update) => {
                                    setDateRange(update);
                                }}
                                isClearable={true}
                            />
                            <button type="button" className="submit_btn" onClick={handleReservationSubmit}>Book Dock</button>
                        </div>
                    </div>
                </div>
                <div className="reviews_container">

                    <h2 className="title">Reviews</h2>
                    {dock.Reviews.map((title) => (
                        <div className="review_card">
                            <div>
                                <div className="review_header">
                                    <p>{title.review}</p>
                                    <p><i className="fas fa-star"></i> {title.rating} </p>
                                </div>

                                <div className="review_buttons">
                                    {checkButtons(title.user_id, title.id)}
                                </div>
                            </div>

                        </div>
                    ))}
                    <div className="review">
                        <form onSubmit={handleReviewSubmit}>
                            <div className="review_header">
                                <h2 className="littleTit">Leave a Review </h2>


                                <div className="stars">
                                    <label>
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
                                </div>
                            </div>
                            <textarea onKeyUp={(e) => setReview(e.target.value)} rows="10" cols='111' placeholder=" Leave Your Review Here"></textarea>

                            <button type="submit" className="submit_btn" >Submit Review </button>
                        </form>

                    </div>
                </div>

            </div >)
            }
        </>
    )

}


export default ReservationPage;
