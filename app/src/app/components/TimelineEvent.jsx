import React from 'react';
import {render} from 'react-dom';

class TimelineEvent extends React.Component {
    render() {
        return <div>{this.props.event.title}</div>
    }
}

export default TimelineEvent;