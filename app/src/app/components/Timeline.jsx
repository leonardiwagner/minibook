import React from 'react';
import {render} from 'react-dom';
import connectToStores from 'alt-utils/lib/connectToStores';


import TimelineEvent from './TimelineEvent.jsx';

import TimelineActions from '../actions/TimelineActions';
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
        setTimeout(function(){
            TimelineActions.loadTimeline();
        },500);
    }

    render(){
        return <div>
            { this.props.timeline.map(event => <TimelineEvent key={event.title} event={event}  />) }
        </div>
    }
}

export default connectToStores(Timeline);
//export default Timeline;