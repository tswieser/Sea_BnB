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
    dispatch(loadDocks(docks))
}



export const getSingularDock = (id) => async dispatch => {
    const response = await fetch(`/api/docks/${id}`);
    const dock = await response.json();

    dispatch(findDock(dock))

}

//Define initialState
const initialState = {}


// const sortList = (list) => {
//     return list.sort((dockA, dockB) => {
//         return dockA.no - dockB.no;
//     }).map((dock) => dock.id);
// };






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

        // case FIND_DOCK:
        //     if (!state[action.dock.id]) {
        //         const newState = {
        //             ...state,
        //             [action.dock.id]: action.dock
        //         };
        //         console.log('=============>', newState)
        //         // const dockList = newState.dock.map((id) => newState[id])
        //         // dockList.push(action.dock)
        //         // newState.dock = sortList(dockList);
        //         // return newState
        //     }

        //     return {
        //         ...state,
        //         [action.dock.id]: {
        //             ...state[action.dock.id],
        //             ...action.dock
        //         }
        //     }
        case FIND_DOCK:
            let dock = action.dock
            // const singleDock = {}
            // action.docks.forEach((dock) => {
            //     singleDock[dock.id] = dock
            // })
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
