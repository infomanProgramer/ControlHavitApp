import { createStore } from 'redux';
import { URL_CONTROL_HAVIT_API } from './actions';


const initialState = {

    // Define your initial state properties here
    urlControlHavitAPI: 'http://192.168.1.2:5000/'

};

const reducer = (state = initialState, action) => {

    // Handle different action types and update the state accordingly
    switch (action.type) {
        case URL_CONTROL_HAVIT_API:
            return {
                ...state,
                urlControlHavitAPI: action.payload
            }
        default:
            return state;
    };
};

export const store = createStore(reducer);