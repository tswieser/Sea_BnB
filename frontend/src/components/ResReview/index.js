import React, { useState, useEffect } from 'react';
import { GetReservations, deleteReservation } from '../../store/reservations';
import { useDispatch, useSelector } from "react-redux";
import { Modal } from '../../context/Modal';
import LoginForm from '../LoginFormModal/LoginForm';
import { Link } from 'react-router-dom'
import EditReservationModal from '../ReservationFormModal'
import './ResReview.css';



function ConfirmReservation() {
    const dispatch = useDispatch();
    const reservations = useSelector((state) => Object.values(state.reservation))

    const state = useSelector(state => state.session)

    const [showModal, setShowModal] = useState(true);

    useEffect(async () => {
        await dispatch(GetReservations());

    }, [dispatch])

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

    let userId = state.user.id

    return (
        <>
            <div className="reservation_div">
                <h2 className='reservation_title'>Your  Reservations </h2>
                <div>
                    {reservations.map((reservation) => (

                        userId === reservation.user_id ? (

                            <div className="reservation_card">
                                <div className="reservation_name"><Link to={`/api/docks/${reservation.dock_id}`}>{reservation.Dock.dock_name}</Link></div>
                                <div>Arriving on {reservation.start_date.slice(0, 10)}</div>
                                <div>Departing on {reservation.end_date.slice(0, 10)}</div>
                                <div className="button_container">
                                    <button className="resBtn" onClick={() => handleDeleteSubmit(reservation.id)}>Delete</button>
                                    <EditReservationModal setShowModal={setShowModal} reservation={reservation} />
                                </div>
                            </div>
                        ) : <></>


                    ))}
                </div>



            </div>
        </>
    );
}

export default ConfirmReservation;
