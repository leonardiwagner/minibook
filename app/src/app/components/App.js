import React from 'react';

import Header from './Header.jsx';
import Timeline from '../container/Timeline';
import EventWriter from '../container/EventWriter';

const App  = () => (
    <div>
        <Header />
        <EventWriter />
        <Timeline />
    </div>
)

export default App