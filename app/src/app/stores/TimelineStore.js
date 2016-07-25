import alt from '../alt';

import TimelineActions from '../actions/TimelineActions';

class TimelineStore {
    constructor(){
        this.timeline = [];

        this.bindListeners({
            loadTimeline: TimelineActions.LOAD_TIMELINE,
            writeEvent: TimelineActions.WRITE_EVENT
        });
    }

    writeEvent(something){
        this.timeline.push({title: something})

    }

    loadTimeline(timeline){
       this.timeline = [
            {title: "erra"},
            {title: "ta"},
            {title: "krip"}
        ];
    }

}

export default alt.createStore(TimelineStore, 'TimelineStore');


