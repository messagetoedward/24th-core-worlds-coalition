import PropTypes from 'prop-types';
import { FaMapMarkerAlt, FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa";
import { formatEventStart, formatEventDuration } from "../../helpers";
import { Card, EventName, Info, Chip } from './Event.styled';


export const Event = ({ name, location, speaker, start, end, type }) => {
  return <Card>
  <EventName>{name}</EventName>
  <Info>
    <FaMapMarkerAlt />
    {location}
  </Info>
  <Info>
    <FaUserAlt />
    {speaker}
  </Info>
  <Info>
    <FaCalendarAlt />
    {formatEventStart(start)}
  </Info> 
  <Info>
    <FaClock />
    {formatEventDuration(start, end)}
  </Info>
  <Chip eventType={type}>{type}</Chip>
</Card>
}

Event.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    speaker: PropTypes.string,
    time: PropTypes.string,
    type: PropTypes.string,
};
