//ACTION TYPE CONSTANT
const LOAD_DOCKS = 'docks/LOAD_DOCKS'

const FIND_DOCK = 'dock/FIND_DOCK'

//Action creator
const loadDocks = (docks) => ({
    type: LOAD_DOCKS,
    docks,
})

const findDock = (dock) => ({
    type: FIND_DOCK,
    dock,
})

//Define a Thunk Creator function
export const getDocks = () => async (dispatch) => {
    const response = await fetch('/api/docks');
    const docks = await response.json();
    console.log(docks)
    dispatch(loadDocks(docks))
}

export const findDock = () => async (dispatch) => {


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
        default:
            return state;
    }
}

export default docksReducer;
