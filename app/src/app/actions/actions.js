export function addEvent(text) {
    console.log("event", text)
    return {
        type: 'ADD_EVENT',
        text
    }
}

export function loadEvents(events) {
    return {
        type: 'LOAD_EVENTS',
        events
    }
}