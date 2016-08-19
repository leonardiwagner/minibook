import React from 'react';
import { connect } from 'react-redux'
import { addEvent } from '../actions/actions'
import {render} from 'react-dom';

class EventWriter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.onSaveEvent = this.onSaveEvent.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    render() {
        return <div>
            <img src={this.props.user && this.props.user.img} width='50' height='50' />
            <label>What's the deuce?
                <textarea id="txtMessage" value={this.state.value} onChange={this.handleChange} />
            </label>
            <button onClick={this.onSaveEvent} >Post</button>
        </div>
    }

    onSaveEvent() {
        this.props.dispatch(addEvent(this.state.value))
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }


}

EventWriter = connect()(EventWriter)

export default EventWriter;