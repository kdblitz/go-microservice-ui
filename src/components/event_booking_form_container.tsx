import * as React from 'react';
import {EventBookingForm} from "./event_booking_form";
import {Event} from "../models/event";

export class EventBookingFormContainerProps {
    eventID: string;
    eventServiceUrl: string;
    bookingServiceUrl: string;
}

export class EventBookingFormContainerState {
    state: "loading"|"ready"|"saving"|"done"|"error";
    event?: Event;
}

export class EventBookingFormContainer extends React.Component<EventBookingFormContainerProps, EventBookingFormContainerState> {
    constructor(props: EventBookingFormContainerProps) {
        super(props);
        this.state = {state: "loading"}
        fetch(props.eventServiceUrl +   "/events/" + props.eventID)
            .then<Event>(response => response.json())
            .then(event => {
                this.setState({
                    state: "ready",
                    event
                })
            });
    }
    render() {
        if (this.state.state === "loading") {
            return <div>Loading...</div>
        } else if (this.state.state === "saving") {
            return <div>Saving...</div>
        } else if (this.state.state === "done") {
            return <div className="alert alert-success">Booking completed!</div>
        } else if (this.state.state === "error") {
            return <div className="alert alert-danger">Unknown error. :(</div>
        }
        return <EventBookingForm event={this.state.event} onSubmit={seats => this.handleSubmit(seats)}/>
    }

    handleSubmit(seats: number) {
        const url = `${this.props.bookingServiceUrl}/events/${this.props.eventID}/bookings`;
        const payload = {seats};
        this.setState({
            state: "saving",
            event: this.state.event
        });
        fetch(url, {method: "POST", body: JSON.stringify(payload)})
            .then(response => {
                this.setState({
                    state: response.ok ? "done" : "error",
                    event: this.state.event
                });
            })
    }
}