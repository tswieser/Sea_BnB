//ACTION TYPE CONSTANT
const LOAD_DOCKS = 'docks/LOAD_DOCKS'

//Action creator
const loadDocks = (docks) => ({
    type: LOAD_DOCKS,
    docks,
})


//Define a Thunk Creator function
export const getDocks = () => async (dispatch) => {
    const response = await fetch('api/docks');
    const docks = await response.json();
    dispatch(loadDocks(docks))
}

//Define initialState
const initialState = {}

//create reducer function
const docksReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DOCKS:
            const allDocks = {}
            action.docks.forEach((dock) => {
                allDocks[docks.id] = dock
            });
            return {
                ...state,
                ...allDocks
            };
        default:
            return state;
    }
}

export default docksReducer;
