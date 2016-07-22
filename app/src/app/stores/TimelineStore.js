import alt from '../alt';

import TimelineActions from '../actions/TimelineActions';

class TimelineStore {
    constructor(){
        this.timeline = [
            {title: "krip"},
            {title: "ta"},
            {title: "s"},
            {title: "lc"},
            {title: "kch"},
            {title: "erra"}
        ];

        this.bindListeners({
            loadTimeline: TimelineActions.LOAD_TIMELINE,
            writeEvent: TimelineActions.WRITE_EVENT
        });
    }

    writeEvent(somthing){
        this.timeline.push({title: somthing});
    }

    loadTimeline(timeline){
        console.log("nuthin right?", timeline);


    }

}

export default alt.createStore(TimelineStore, 'TimelineStore');


