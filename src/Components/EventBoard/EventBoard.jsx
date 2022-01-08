import PropTypes from 'prop-types';
import { Event } from "../Event/Event";
import { Board } from './EventBoard.styled';

export const EventBoard = ({ events }) => {
    console.log(events);
    return (<Board>
        {events.map(({ name, location, speaker, time, type }) => (
            <Event 
            key={name} 
            name={name} 
            location={location} 
            speaker={speaker} 
            type={type} 
            start={time.start} 
            end={time.end}
            />
        ))}
    </Board>);
}

EventBoard.propTypes = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,
            time: PropTypes.exact({
                start: PropTypes.string.isRequired,
                end: PropTypes.string.isRequired,
            }),
        })
    ),
}