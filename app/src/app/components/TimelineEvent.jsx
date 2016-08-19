import React from 'react';
import {render} from 'react-dom';

class TimelineEvent extends React.Component {
    render() {
        return <div>{this.props.event}</div>
    }
}

export default TimelineEvent;