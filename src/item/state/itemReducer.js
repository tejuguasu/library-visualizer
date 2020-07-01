import * as ActionTypes from './itemActions';

export const Item = (state = {
    isLoading: true,
    errMess: null,
    libraries: []
}, action) => {
switch (action.type) {
    case ActionTypes.LIBRARIES_ADD:
        return {...state, isLoading: false, errMess: null, libraries: LIBRARIES};

    default:
        return state;

}
}

export const librariesAdd = () => ({
    type: ActionTypes.LIBRARIES_ADD
});
