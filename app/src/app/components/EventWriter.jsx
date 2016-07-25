import React from 'react';
import {render} from 'react-dom';
import connectToStores from 'alt-utils/lib/connectToStores';

import TimelineActions from '../actions/TimelineActions';
import UserActions from '../actions/UserActions';
import TimelineStore from '../stores/TimelineStore';
import UserStore from '../stores/UserStore';

class EventWriter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        //ugly af http://stackoverflow.com/questions/32317154/uncaught-typeerror-cannot-read-property-setstate-of-undefined
        //using arrow functions to declare functions below would be prettier
        this.handleChange = this.handleChange.bind(this);
        this.onSaveEvent = this.onSaveEvent.bind(this);
    }

    static getStores() {
        return [ TimelineStore, UserStore ];
    }

    static getPropsFromStores() {
        return Object.assign({}, TimelineStore.getState(), UserStore.getState());
    }

    componentDidMount(){
        UserActions.loadUser();
    }

    onSaveEvent(){
        TimelineActions.writeEvent(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return <div>
            <img src={this.props.user.img} width='50' height='50' />
            <label>What's the deuce?
                <textarea id="txtMessage" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button onClick={this.onSaveEvent} >Post</button>
        </div>
    }
}

export default connectToStores(EventWriter);