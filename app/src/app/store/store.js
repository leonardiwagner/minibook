import { createStore } from 'redux';

import { addEvent } from '../actions/actions';
import minibookApp from '../reducer/reducer';

let store = createStore(minibookApp);

