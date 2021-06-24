import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReservationEdit from './reservationModal'



function EditReservationModal({ reservation }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <button className="edit_btn" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReservationEdit reservation={reservation} />
                </Modal>
            )}
        </>
    );
}

export default EditReservationModal;
