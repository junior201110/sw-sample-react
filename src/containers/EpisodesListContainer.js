import {connect} from "react-redux";
import EpisodeList from "../components/EpisodeList";
import {handleFavoriteChange, fetchAll} from "../actions/EpisodesActions";

const mapStateToProps = state => {
    console.log("APP STATE",state);
    return state.sw;
};
const mapDispatchToProp = dispatch => ({
    init: () => dispatch(fetchAll()),
    handleFavorite: ep => dispatch(handleFavoriteChange(ep))
});

export default connect(mapStateToProps, mapDispatchToProp)(EpisodeList)