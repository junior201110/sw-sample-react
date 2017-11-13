import React, {Component} from "react";

export default class EpisodeItem extends Component {
    render() {
        const {episode, onFavoriteClick} = this.props;
        return (
            <div style={{padding: '16px 0'}}>
                <p>Título: {episode.title}</p>
                <p>Diretor: {episode.director}</p>
                <p>Produtor: {episode.producer}</p>
                <p>Favorito: {episode.isFavorite ? 'Sim' : 'Não'}</p>
                <button
                    onClick={() => onFavoriteClick({epId: episode.episode_id, isFavorite: episode.isFavorite ? 0 : 1})}>
                    {episode.isFavorite ?  'Remover dos Favoritos': 'Favoritar'}
                </button>
            </div>
        );
    }

}
