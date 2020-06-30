import * as ActionTypes from './userConfigurationActions';
import { USER_CONFIGURATION } from '../../shared/userConfiguration';

export const UserConfiguration = (state = {
    isLoading: true,
    errMess: null,
    userConfiguration: {}
}, action) => {
switch (action.type) {
    case ActionTypes.USERCONFIGURATION_ADD:
        return {...state, isLoading: false, errMess: null, userConfiguration: USER_CONFIGURATION};

    case ActionTypes.USERCONFIGURATION_INITIALIZE:
        return { ...state, userConfiguration: action.payload };

    default:
        return state;
}
}

export const userConfigurationAdd = () => ({
    type: ActionTypes.USERCONFIGURATION_ADD
});

export const userConfigurationInitialize = () => (dispatch, getState) => {
    const { userConfiguration, libraries } = getState();
    var changed = false;

    var library = null;
    if (!userConfiguration.isLoading && !libraries.isLoading){
        if (userConfiguration.userConfiguration.library === null && libraries.libraries.length > 0){
            library = libraries.libraries[0];
            changed = true;
        }
    }

    if (changed){
        dispatch({
            type: ActionTypes.USERCONFIGURATION_INITIALIZE,
            payload: {
                library: library
            }
        });
    }
};