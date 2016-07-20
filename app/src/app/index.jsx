import React from 'react';
import {render} from 'react-dom';

import Timeline from './components/Timeline.jsx';
import EventWriter from './components/EventWriter.jsx';

class App extends React.Component {
    render(){
        return <div>Timeline
            <EventWriter />
            <Timeline />
        </div>
    }
}

render(<App/>, document.getElementById('app'));