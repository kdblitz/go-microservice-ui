import { Event } from '../models/event'
import * as React from 'react';
import {Link} from "react-router-dom";

export interface EventListItemProps {
    event: Event;
}

export class EventListItem extends React.Component<EventListItemProps,{}> {
    render() {
        return <tr>
            <td>{this.props.event.Name}</td>
            <td>{this.props.event.Location.Name}</td>
            <td>
                <Link className="btn btn-primary"
                    to={`/events/${this.props.event.ID}/book`}>Book now!</Link>
            </td>
        </tr>
    }
}