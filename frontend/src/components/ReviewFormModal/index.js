import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import ReviewEdit from './reviewEditModal'



function EditFormModal({ reviewId, user_id, dock_id }) {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
            <button className="submit_btn" onClick={() => setShowModal(true)}>Edit</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ReviewEdit setShowModal={setShowModal} reviewId={reviewId} user_id={user_id} dock_id={dock_id} />
                </Modal>
            )}
        </>
    );
}

export default EditFormModal;
