import { createStore } from 'redux';

export const URL_CONTROL_HAVIT_API = 'URL_CONTROL_HAVIT_API';

export const MODAL_VISIBLE = 'MODAL_VISIBLE';

export const setUrlControlHavitApi = (value) => {
    return {
        type: URL_CONTROL_HAVIT_API,
        payload: value
    };
};

export const setModalVisible = (value) => {
    return {
        type: MODAL_VISIBLE,
        payload: value
    };
}

const initialState = {

    // Define your initial state properties here
    urlControlHavitAPI: 'http://192.168.1.2:5000/',
    modalVisible: false,
};

const reducer = (state = initialState, action) => {
    // Handle different action types and update the state accordingly
    switch (action.type) {
        case URL_CONTROL_HAVIT_API:
            return {
                ...state,
                urlControlHavitAPI: action.payload
            }
        case MODAL_VISIBLE:
            return {
                ...state,
                modalVisible: action.payload
            }
        default:
            return state;
    };
};

export const store = createStore(reducer);


