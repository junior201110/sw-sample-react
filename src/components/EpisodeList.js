import React, {Component} from "react";
import EpisodeItem from "./EpisodeItem";

export default class EpisodeList extends Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        const {episodes, handleFavorite} = this.props;
        return (
            <div>
                {
                    episodes.map(episode =>
                        <EpisodeItem
                            key={episode.episode_id}
                            episode={episode}
                            onFavoriteClick={handleFavorite}/>)
                }
            </div>
        );
    }

}