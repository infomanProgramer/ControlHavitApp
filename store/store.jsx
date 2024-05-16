import { createStore } from 'redux';

export const URL_CONTROL_HAVIT_API = 'URL_CONTROL_HAVIT_API';

export const MODAL_VISIBLE = 'MODAL_VISIBLE';

export const PAGINATION_NUMBER = 'PAGINATION_NUMBER';

export const MODAL_VISIBLE_REGISTRAR_H = 'MODAL_VISIBLE_REGISTRAR_H';

export const PAGE_ACTIVE = 'PAGE_ACTIVE';

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

export const setModalVisibleRegistraH = (value) => {
    return {
        type: MODAL_VISIBLE_REGISTRAR_H,
        payload: value
    };
}

export const setPaginationNumber = (value) => {
    return {
        type: PAGINATION_NUMBER,
        payload: value
    };
};

export const setPageActive = (value) => {
    return {
        type: PAGE_ACTIVE,
        payload: value
    };
};

const initialState = {

    // Define your initial state properties here
    urlControlHavitAPI: 'http://192.168.1.5:5000/',
    modalVisible: false,
    paginationNumber: 1,
    modalVisibleRegistrarH: false,
    pageActive: 1
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
        case PAGINATION_NUMBER:
            return {
                ...state,
                paginationNumber: action.payload
            }
        case MODAL_VISIBLE_REGISTRAR_H:
            return {
                ...state,
                modalVisibleRegistrarH: action.payload
            }
        case PAGE_ACTIVE:
            return {
                ...state,
                pageActive: action.payload
            }
        default:
            return state;
    };
};

export const store = createStore(reducer);



