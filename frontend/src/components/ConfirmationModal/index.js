import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
// import ReviewEdit from './reviewEditModal'



function ConfirmReservationModal({ reviewId, user_id, dock_id }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <button className="edit_btn" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewEdit reviewId={reviewId} user_id={user_id} dock_id={dock_id} />
                </Modal>
            )}
        </>
    );
}

export default ConfirmReservationModal;
