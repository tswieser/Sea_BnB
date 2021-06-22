

//ACTION TYPE CONSTANT
const LOAD_DOCKS = 'docks/LOAD_DOCKS'

const FIND_DOCK = 'dock/FIND_DOCK'

const ADD_RESERVATION = 'dock/ADD_RESERVATION'

//Action creator
const loadDocks = (docks) => ({
    type: LOAD_DOCKS,
    docks,
});

const findDock = (dock) => ({
    type: FIND_DOCK,
    dock,
});

const postReservation = (reservation) => ({
    type: ADD_RESERVATION,
    reservation,
});



//Define a Thunk Creator function
export const getDocks = () => async (dispatch) => {
    const response = await fetch('/api/docks');
    const docks = await response.json();
    dispatch(loadDocks(docks))
}



export const getSingularDock = (id) => async dispatch => {
    const response = await fetch(`/api/docks/${id}`);
    const dock = await response.json();

    dispatch(findDock(dock))

}

export const AddReservation = (reservation) => async dispatch => {
    const response = await fetch('/api/reservation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reservation)
    });
    if (response.ok) {
        const details = await response.json();
        dispatch(postReservation(details));
        return details;
    }

}

//Define initialState
const initialState = {}

//create reducer function
const docksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DOCKS:
            const allDocks = {}
            action.docks.forEach((dock) => {
                allDocks[dock.id] = dock
            });
            return {
                ...state,
                ...allDocks
            };
        case FIND_DOCK:
            let dock = action.dock
            return {
                ...state,
                [action.dock.id]: {
                    ...state[action.dock.id],
                    dock
                }
            };
        case ADD_RESERVATION:
            let reservation = action.reservation
            return {
                ...state,
                ...reservation
            }





        default:
            return state;
    }
}

export default docksReducer;
