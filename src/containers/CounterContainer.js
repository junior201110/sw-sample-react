import Counter from "../components/Counter";
import {connect} from "react-redux";
import {handleIncrement, handleDecrement, startCount,stopCount} from "../actions/CounterActions";

const mapStateToProps = (state) => {
    return state.counter;
};

const mapDistpachToProps = (dispatch) => {
    return {
        onIncrement: (newValue) => dispatch(handleIncrement(newValue)),
        onDecrement: (newValue) => dispatch(handleDecrement(newValue)),
        onStart: (currentValue)=> dispatch(startCount(currentValue)),
        onStop: ()=> dispatch(stopCount())
    };
};


export default connect(mapStateToProps, mapDistpachToProps)(Counter);

