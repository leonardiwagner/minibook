const initialState = {
    events: []
}

export function minibookApp(state = initialState, action) {
    console.log("reducer", state.events)
    if(action.type === 'ADD_EVENT'){
        const newEvents = state.events.map(x => x);
        newEvents.push(action.text);
        return { events: newEvents };
    }

    return state;
}