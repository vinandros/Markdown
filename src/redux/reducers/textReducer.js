const initialState = " hi ";



export default function textReducer( state = initialState, action){
    switch (action.type) {
        case 'value':
            return state;
        default:
            return state;
    }

}