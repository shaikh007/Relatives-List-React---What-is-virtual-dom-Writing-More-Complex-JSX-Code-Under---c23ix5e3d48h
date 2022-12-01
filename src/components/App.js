import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
                <ol key="relativeList">
                    <li key="relativeListItem1">Shaikh Irfan</li>
                    <li key="relativeListItem1">Sameer fuddi</li>
                    <li key="relativeListItem1">Thekadar</li>
                </ol>
            </div>
        )
    }
}


export default App;
