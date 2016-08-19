import React, { PropTypes } from 'react';
import {render} from 'react-dom';
import TimelineEvent from './TimelineEvent.jsx'

const Timeline = ({ events }) => {

    return (
    <div>
        { events.map(event => <TimelineEvent key={event} event={event}  />) }
    </div>
    )
}

Timeline.propTypes = {
    events: PropTypes.array.isRequired
}

export default Timeline;