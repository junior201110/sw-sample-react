import React, {Component} from 'react';

import CounterContainer from "./containers/CounterContainer";

import './App.css';
import EpisodesListContainer from "./containers/EpisodesListContainer";

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <EpisodesListContainer />
            </div>
        );
    }
}
