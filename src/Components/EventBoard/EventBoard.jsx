import PropTypes from 'prop-types';
import { Event } from "../Event/Event";

export const EventBoard = ({ events }) => {
    console.log(events);
    return <div>
        {events.map(event => (
            <Event key={event.name} event={event} />
    ))}
    </div>
}

EventBoard.propTypes = {
    events: PropTypes.array,
}