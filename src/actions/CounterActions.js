export const ON_INCREMENT = "ON_INCREMENT";
export const ON_DECREMENT = "ON_DECREMENT";
export const ON_CHANGE = "ON_CHANGE";

export const handleIncrement = value => {
    return {
        type: ON_INCREMENT,
        payload: {
            value
        }
    };
};


export const handleDecrement = value => {
    return {
        type: ON_DECREMENT,
        payload: {
            value
        }
    };
};

let timeout = null;
let value = 0;
export const startCount = currentValue => dispatch => {
    value = currentValue;
    timeout = setInterval(() => {
        value = value + 1;
        dispatch(handleIncrement(value));
    }, 1000);
};

export const stopCount = () => dispatch => {
    clearInterval(timeout);
    dispatch(handleIncrement(value));
};
