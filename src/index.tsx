import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {EventListContainer} from "./components/event_list_container";

ReactDOM.render(
    <div className="container">
        <h1>MyEvents</h1>
        <EventListContainer eventListUrl="http://192.168.56.101:8181"/>
    </div>, document.getElementById("myevents-app")
)