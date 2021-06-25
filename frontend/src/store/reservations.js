import { csrfFetch } from './csrf'

const ADD_RESERVATION = 'dock/ADD_RESERVATION'

const LOAD_RESERVATION = 'reservation/LOAD_RESERVATION'

const REMOVE_RESERVATION = 'reservation/REMOVE_RESERVATION'

const UPDATE_RESERVATION = 'reservation/UPDATE_RESERVATION'


const loadReservations = (reservations) => ({
    type: LOAD_RESERVATION,
    reservations,
});



const postReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation,
});

const remove = (reservationId) => ({
    type: REMOVE_RESERVATION,
    reservationId,
});

const update = (reservation) => ({
    type: UPDATE_RESERVATION,
    reservation,
});


export const GetReservations = () => async (dispatch) => {
    const response = await fetch('/api/reservation');
    const reservations = await response.json();
    dispatch(loadReservations(reservations))
}

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

export const deleteReservation = (reservationId) => async dispatch => {
    const response = await csrfFetch(`/api/reservation/${reservationId}`, {
        method: 'delete',
    })
    if (response.ok) {
        const reservation = await response.json();
        dispatch(remove(reservation));
        return reservation
    }
}

export const updateReservation = (reservation) => async dispatch => {
    const response = await csrfFetch(`/api/reservation/${reservation.id}`, {
        method: 'put',
        body: JSON.stringify(reservation),
    });
    if (response.ok) {
        const newReservation = await response.json();
        dispatch(postReservation(newReservation))

        return newReservation
    }
}



const initialState = {};

const reservationReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RESERVATION:
            const allReservations = { ...state }
            action.reservations.forEach((reservation) => {
                allReservations[reservation.id] = reservation
            });
            return allReservations
        case ADD_RESERVATION:
            let reservation = action.reservation
            let oldState = { ...state }
            oldState[reservation.id] =  reservation
            return oldState
        case REMOVE_RESERVATION: {
            const newState = { ...state };
            delete newState[action.reservationId];
            return newState;
        }

        default:
            return state;
    }
}

export default reservationReducer;
