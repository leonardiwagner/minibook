import alt from '../alt';

class TimelineActions {
    loadTimeline(timeline) {
        this.dispatch(timeline);
    }

    writeNewEvent(event) {
        this.dispatch(event);
    }
}

export default alt.createActions(TimelineActions);