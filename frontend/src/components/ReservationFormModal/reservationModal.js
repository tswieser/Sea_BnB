import DatePicker from "react-datepicker";
import { useEffect, useState } from 'react';
import reviewReducer, { updateReview } from '../../store/reviews';
import { useDispatch, useSelector } from 'react-redux'
import { format } from "date-fns";



function ReservationEdit({ reservation }) {
    const state = useSelector(state => state.session)

    const dispatch = useDispatch()

    const [checkIn, setCheckIn] = useState(new Date());
    const [checkOut, setCheckOut] = useState(new Date());

    const handleReservationSubmit = async (e) => {
        let user_id = state.user.id

        e.preventDefault();
        let start_date = format(checkIn, 'yyyy-MM-dd')
        let end_date = format(checkOut, 'yyyy-MM-dd')
        let dock_id = reservation.Dock.id
        const id = reservation.id

        const reservation = {
            id,
            start_date,
            end_date,
            dock_id,
            user_id
        }
        // history.push('/api/docks')

        // const stayInfo = await dispatch(AddReservation(reservation))

        // if (stayInfo) {
        //     history.push('/api/docks')
        // }

    }

    return (


        <div className="reservation_form">

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
            <button type="button" className="submit_btn" onClick={handleReservationSubmit}>Book Dock</button>
        </div>


    )

}

export default ReservationEdit
