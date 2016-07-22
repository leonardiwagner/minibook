import React from 'react';
import {render} from 'react-dom';

import TimelineStore from '../stores/TimelineStore';
import TimelineActions from '../actions/TimelineActions';

class EventWriter extends React.Component {
    onSaveEvent(){
        TimelineActions.writeEvent("vai sim ó");
    }
    render() {
        return <div>
            title <input type="text" />
            <button onClick={this.onSaveEvent} >Send dis</button>
        </div>
    }
}

export default EventWriter;