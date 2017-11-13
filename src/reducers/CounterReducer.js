import {ON_INCREMENT, ON_DECREMENT} from "../actions/CounterActions";


const counterReducer = (state = {value: 0}, action) => {
    switch (action.type) {
        case ON_INCREMENT:
            return Object.assign({}, state, action.payload);
        case ON_DECREMENT:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default counterReducer;