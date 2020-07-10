import * as ActionTypes from './userConfigurationActions';
import { USER_CONFIGURATION } from '../../shared/userConfiguration';
import { itemsFetch } from '../../item/state/itemReducer';

export const UserConfiguration = (state = {
    isLoading: true,
    errMess: null,
    userConfiguration: {}
}, action) => {
switch (action.type) {
    case ActionTypes.USERCONFIGURATION_SET:
        return {...state, isLoading: false, errMess: null, userConfiguration: action.payload};

    default:
        return state;
}
}

export const userConfigurationSet = (configuration = USER_CONFIGURATION) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.USERCONFIGURATION_SET,
            payload: configuration
        });
        if (configuration.library){
            return dispatch(itemsFetch(configuration.library));
        }
    }
};

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
        dispatch(userConfigurationSet({
            library: library
        }));
    }
};