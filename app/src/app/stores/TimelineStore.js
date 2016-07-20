import alt from '../alt';

import TimelineActions from '../Actions/TimelineActions';

class TimelineStore {
    constructor(){
        this.timeline = [];

        this.bindListeners({
            loadTimeline: TimelineActions.LOAD_TIMELINE,
            handleWriteNewEvent: TimelineActions.WRITE_NEW_EVENT
        });
    }

    loadTimeline(timeline){
        console.log("nuthin right?", timeline);

        this.timeline = [
            {title: "krip"},
            {title: "ta"},
            {title: "s"},
            {title: "lc"},
            {title: "kch"},
            {title: "erra"}
        ];
    }

    handleWriteNewEvent(event){
        console.log("shimbalae", event);
    }

}

export default alt.createStore(TimelineStore, 'TimelineStore');


