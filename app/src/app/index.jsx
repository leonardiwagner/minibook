import React from 'react';
import {render} from 'react-dom';

import Header from './components/Header.jsx';
import Timeline from './components/Timeline.jsx';
import EventWriter from './components/EventWriter.jsx';

class App extends React.Component {
    render(){
        return <div>
            <Header />
            <EventWriter />
            <Timeline />
        </div>
    }
}

render(<App/>, document.getElementById('app'));