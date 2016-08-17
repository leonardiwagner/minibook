import React, { PropTypes } from 'react';
import {render} from 'react-dom';

const Timeline = ({ timeline }) => (
    <div>
        { timeline.map(event => <TimelineEvent key={event.title} event={event}  />) }
    </div>
)

Timeline.propTypes = {
    timeline: PropTypes.array.isRequired
}

export default Timeline;