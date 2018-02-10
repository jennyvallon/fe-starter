import {types} from './actions';

export default (state = {}, action) => {
    switch (action.types) {
        case types.APPLOADING:
            return {
                ...state,
                isLoading: true
            };
        case types.APPLOADED:
            return {
                ...state,
                isLoading: false
            };
        default:
            return {
                ...state
            };
    }
};