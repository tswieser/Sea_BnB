import { csrfFetch } from './csrf'

const ADD_RESERVATION = 'dock/ADD_RESERVATION'


const postReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation,
});



export const AddReservation = (reservation) => async dispatch => {
    const response = await csrfFetch('/api/reservation', {
        method: 'POST',
        body: JSON.stringify(reservation)
    });
    if (response.ok) {
        const details = await response.json();
        dispatch(postReservation(details));
        return details;
    }
}


const initialState = {};

const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESERVATION:
            let reservation = action.reservation
            return {
                ...state,
                [action.reservation.id]: {
                    ...reservation
                }

            }

        default:
            return state;
    }
}

export default reservationReducer;
