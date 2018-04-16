import { Event } from '../models/event'
import * as React from 'react';

export interface EventListItemProps {
    event: Event;
}

export class EventListItem extends React.Component<EventListItemProps,{}> {
    render() {
        return <tr>
            <td>{this.props.event.Name}</td>
            <td>{this.props.event.Location.Name}</td>
        </tr>
    }
}