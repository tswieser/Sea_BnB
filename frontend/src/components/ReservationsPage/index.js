import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSingularDock, getDocks, AddReservation } from '../../store/dock';
import { avgRating } from '../DocksPage'
import './ReservationPage.css'
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';




const ReservationPage = () => {
    const { dockId } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();

    const state = useSelector(state => state.session)
    const dock = useSelector(state => state.dock[dockId])


    const [showModal, setShowModal] = useState(true);
    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());


    useEffect(async () => {
        await dispatch(getDocks(),);
    }, [dispatch])


    const handleSubmit = async (e) => {
        let user_id = state.user.id

        e.preventDefault();
        let start_date = format(checkIn, 'yyyy-MM-dd')
        let end_date = format(checkOut, 'yyyy-MM-dd')
        let dock_id = dockId
        // console.log('===========>', start_date)


        const reservation = {
            start_date,
            end_date,
            dock_id,
            user_id
        }
        history.push('/api/docks')

        const stayInfo = await dispatch(AddReservation(reservation))

        // if (stayInfo) {
        //     history.push('/api/docks')
        // }

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
        // history.push('/')
        // console.log(flag)

    }


    return (
        <>
            {dock && (< div className="main-container" >
                <h2 className="Title">{dock.dock_name}</h2>

                <div className="basic_info_container">
                    <div className="dock_rating"><i className="fas fa-star"></i> {avgRating(dock.Reviews)}   ({dock.Reviews.length} reviews)</div>
                    <div className="location">{dock.city}, {dock.state}, United States</div>
                </div>

                <div className="img_container">
                    {dock.Images.map((dock) => (
                        <img
                            className="dock_image"
                            src={dock.url}
                        ></img>
                    ))}
                </div>
                <div className="user_title">
                    <p>Private Dock Hosted by {dock.User.username}</p>
                </div>

                <div className="reservation_form">
                    <div>${dock.price}/ Night</div>
                    <div className="dock_rating"><i className="fas fa-star"></i> {avgRating(dock.Reviews)}   ({dock.Reviews.length} reviews)</div>
                    <DatePicker
                        dateFormat="yyyy/MM/dd"
                        placeholderText="Check In"
                        selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                    />

                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Check Out"
                        selected={checkOut}
                        onChange={(date) => setCheckOut(date)}
                    />
                    <button type="button" className="submit_btn" onClick={handleSubmit}>Book Dock</button>
                </div>

            </div >)}
        </>
    )

}


export default ReservationPage;
