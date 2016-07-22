import alt from '../alt';

class TimelineActions {
    loadTimeline(timeline) {
        this.dispatch(timeline);
    }

    writeEvent(event){
        return event;
    }
}

export default alt.createActions(TimelineActions);