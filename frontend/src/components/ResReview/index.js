import React, { useState, useEffect } from 'react';
import { GetReservations, deleteReservation } from '../../store/reservations';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import { Link } from 'react-router-dom'
import { format } from "date-fns";
import EditReservationModal from '../ReservationFormModal'



function ConfirmReservation() {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => Object.values(state.reservation))

    const state = useSelector(state => state.session)
    let userId = state.user.id

    const [showModal, setShowModal] = useState(true);

    useEffect(async () => {
        await dispatch(GetReservations());

    }, [dispatch])


    console.log(reservations)
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

    async function handleDeleteSubmit(id) {
        await dispatch(deleteReservation(id))
        await dispatch(GetReservations())
    }


    return (
        <>
            <div className="reservation_div">
                <h2>Your  Reservations </h2>
                <div>
                    {reservations.map((reservation) => (

                        userId === reservation.user_id ? (

                            <>
                                <div><Link to={`/api/docks/${reservation.Dock.id}`}>{reservation.Dock.dock_name}</Link></div>
                                <div>Arriving on {reservation.start_date.slice(0, 10)}</div>
                                <div>Departing on {reservation.end_date.slice(0, 10)}</div>
                                <button onClick={() => handleDeleteSubmit(reservation.id)}>Delete</button>
                                <EditReservationModal reservation={reservation} />

                            </>
                        ) : <></>


                    ))}
                </div>



            </div>
        </>
    );
}

export default ConfirmReservation;
