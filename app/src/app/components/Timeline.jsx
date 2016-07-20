import React from 'react';
import {render} from 'react-dom';


import TimelineEvent from './TimelineEvent.jsx';

import TimelineStore from '../stores/TimelineStore'

class Timeline extends React.Component {
    constructor(props){
        super(props);
        this.timeline = [
            {title: "test"},
            {title: "testa"},
            {title: "testy"},
            {title: "testuu"}
        ];
    }

    componentDidMount() {
        TimelineStore.loadTimeline();
    }

    render(){
        return <AltContainer store={TimelineStore}>
            { this.timeline.map(event => <TimelineEvent key={event.title} event={event}  />) }
        </AltContainer>
    }
}

export default Timeline;