import * as React from "react";
import {EventList} from "./event_list";
import {Event} from "../models/event";

export interface EventListContainerProps {
    eventListUrl: string;
}

export interface EventListContainerState {
    loading: boolean;
    events: Event[]
}

export class EventListContainer extends React.Component<EventListContainerProps, EventListContainerState> {
    constructor(p: EventListContainerProps) {
        super(p);
        this.state = {
            loading: true,
            events: []
        };

        fetch(p.eventListUrl + "/events", {method: "GET"})
            .then<Event[]>(response => response.json())
            .then(events => {
                this.setState({
                    loading: false,
                    events
                })
            });
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        
        return <EventList events={this.state.events}/>
    }
}