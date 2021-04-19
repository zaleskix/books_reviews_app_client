import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utils';

const initialState = {
    username: null,
    userId: null,
    userDetails: null,
    error: null,
    loading: false
};

const getUserInfoStart = ( state, action ) => {
    return updateObject( state, { error: null, loading: true } );
};

const getUserInfoSuccess = (state, action) => {
    console.log(action)
    return updateObject( state, {
        username: action.idToken.data.username,
        userId: action.idToken.data.userExternalId,
        userDetails: action.idToken.data,
        error: null,
        loading: false
    } );
};

const getUserInfoFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        loading: false
    });
};


const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_USER_INFO_START: return getUserInfoStart(state, action);
        case actionTypes.GET_USER_INFO_SUCCESS: return getUserInfoSuccess(state, action);
        case actionTypes.GET_USER_INFO_FAIL: return getUserInfoFail(state, action);
        default:
            return state;
    }
};

export default reducer;