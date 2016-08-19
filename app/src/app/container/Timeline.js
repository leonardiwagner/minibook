import { connect } from 'react-redux'
import { loadEvents } from '../actions/actions'
import TimelineComponent from '../components/Timeline.jsx'


const mapStateToProps = (state) => {
    return {
        events: state.events
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(loadEvents(id))
        }
    }
}

const Timeline = connect(
    mapStateToProps//,
    //mapDispatchToProps
)(TimelineComponent)

export default Timeline