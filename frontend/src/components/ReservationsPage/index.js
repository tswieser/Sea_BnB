import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getSingularDock, getDocks } from '../../store/dock';
import { avgRating } from '../DocksPage'
import './ReservationPage.css'
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";




const ReservationPage = () => {
    const { dockId } = useParams();
    const dock = useSelector(state => state.dock[dockId])
    const user = useSelector(state => state.session.user.id)

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());

    useEffect(() => {
        console.log('checkIn', format(checkIn, 'yyyy-mm-dd'))
        console.log('checkOut', format(checkOut, 'yyyy-mm-dd'))
    }, [checkIn, checkOut])


    const dispatch = useDispatch()

    useEffect(async () => {
        await dispatch(getDocks(),);
    }, [dispatch])


    const handleSubmit = async (e) => {
        e.preventDefault();

        let start_date = format(checkIn, 'yyyy-mm-dd')
        let end_date = format(checkOut, 'yyyy-mm-dd')

        const reservation = {
            start_date,
            end_date,
            dock,
            user
        }


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
                        // selected={checkIn}
                        onChange={(date) => setCheckIn(date)}
                    />
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        placeholderText="Check Out"
                        // selected={date}
                        onChange={(date) => setCheckOut(date)}
                    />
                    <button type="submit" className="submit_btn">Book Dock</button>
                </div>

            </div >)}
        </>
    )

}


export default ReservationPage;
