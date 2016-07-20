import React from 'react';
import {render} from 'react-dom';

import TimelineStore from '../stores/TimelineStore';

class EventWriter extends React.Component {
    onSaveEvent(){
        TimelineStore.handleWriteNewEvent()
    }
    render() {
        return <form>
            title <input type="text" />
            <button onClick={this.onSaveEvent} />
        </form>
    }
}

export default EventWriter;