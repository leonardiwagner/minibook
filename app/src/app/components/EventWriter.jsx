import React from 'react';
import {render} from 'react-dom';

class EventWriter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onSaveEvent = this.onSaveEvent.bind(this);
    }

    onSaveEvent(){
        //TimelineActions.writeEvent(this.state.value);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
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
}

export default EventWriter;