import { csrfFetch } from './csrf'

//ACTION TYPE CONSTANT
const LOAD_DOCKS = 'docks/LOAD_DOCKS'

const FIND_DOCK = 'dock/FIND_DOCK'



//Action creator
const loadDocks = (docks) => ({
    type: LOAD_DOCKS,
    docks,
});

const findDock = (dock) => ({
    type: FIND_DOCK,
    dock,
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


        default:
            return state;
    }
}

export default docksReducer;
