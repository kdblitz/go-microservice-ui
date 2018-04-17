import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {HashRouter as Router, Route} from 'react-router-dom';
import {Navigation} from "./components/navigation";
import {EventListContainer} from "./components/event_list_container";

class App extends React.Component<{},{}> {
    render() {
        const eventList = () => <EventListContainer eventListUrl="http://localhost:8181"/>;
        return <Router>
            <div>
                <Navigation brandName="MyEvents"/>
                <div className="container">
                    <h1>MyEvents</h1>
                    <Route exact path="/" component={eventList}/>
                </div>
            </div>
        </Router>
    }
}

ReactDOM.render(<App />, document.getElementById("myevents-app"))