import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {minibookApp} from './reducer/reducer'
import App from './components/App'

let store = createStore(minibookApp)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)