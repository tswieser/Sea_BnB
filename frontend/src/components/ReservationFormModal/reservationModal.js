import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { format } from "date-fns";
import { updateReservation, GetReservations } from '../../store/reservations'
import { useHistory } from 'react-router-dom';
import './reservationModal.css'


function ReservationEdit({ reservation }) {
    const state = useSelector(state => state.session)

    const dispatch = useDispatch()
    const history = useHistory();

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());

    useEffect(async () => {
        await dispatch(GetReservations());

    }, [dispatch])


    const handleReservationSubmit = async (e) => {
        let user_id = state.user.id

        e.preventDefault();
        let start_date = format(checkIn, 'yyyy-MM-dd')
        let end_date = format(checkOut, 'yyyy-MM-dd')
        let dock_id = reservation.Dock.id
        const id = reservation.id

        const reservationInfo = {
            id,
            start_date,
            end_date,
            user_id,
            dock_id
        }
        console.log(reservationInfo)

        const stayInfo = await dispatch(updateReservation(reservationInfo))
        // await dispatch(GetReservations())

        if (stayInfo) {
            // await dispatch(GetReservations())

        }

    }

    return (


        <div className="reservation_form_container">
            <h2 className="edit_title">Edit Reservation</h2>
            <div className='titles'>
                <h3 id="checkIn">Check In</h3>
                <h3 id="checkOut">Check Out</h3>
            </div>
            <div className="calender_container">
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
            </div>
            <button type="button" className="reservation_btn" onClick={handleReservationSubmit}>Book Dock</button>
        </div>


    )

}

export default ReservationEdit
