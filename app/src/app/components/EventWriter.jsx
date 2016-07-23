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
            <img src='http://i.imgur.com/H357yaH.jpg' width='50' height='50' />
            <label>What's the deuce?
                <textarea id="txtMessage" />
            </label>
            <button onClick={this.onSaveEvent} >Post</button>
        </div>
    }
}

export default EventWriter;