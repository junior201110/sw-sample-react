import {ON_EPISODES_CHANGE} from "./../actions/EpisodesActions";

const episodesReducer = (state = {episodes: []}, action) => {
    switch (action.type) {
        case ON_EPISODES_CHANGE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
};

export default episodesReducer