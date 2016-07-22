import React from 'react';
import connectToStores from 'alt-utils/lib/connectToStores';
import {render} from 'react-dom';


import TimelineEvent from './TimelineEvent.jsx';

import TimelineStore from '../stores/TimelineStore'

class Timeline extends React.Component {
    constructor(props){
        super(props);
    }

    static getStores() {
        return [ TimelineStore ];
    }

    static getPropsFromStores() {
        return TimelineStore.getState();
    }

    componentDidMount() {
    //    TimelineStore.loadTimeline();
    }

    render(){
        return <div>
            { this.props.timeline.map(event => <TimelineEvent key={event.title} event={event}  />) }
        </div>
    }
}

export default connectToStores(Timeline);
//export default Timeline;