const initialState = {
    events: []
}

export function minibookApp(state = initialState, action) {
    if(action.type === 'ADD_EVENT'){
        const newEvents = state.map(x => x);
        newEvents.push(action.text);
        return newEvents;
    }

    return state;
}