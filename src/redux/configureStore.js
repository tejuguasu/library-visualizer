import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserConfiguration } from '../userConfiguration/state/userConfigurationReducer';
import { Libraries } from '../library/state/libraryReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            userConfiguration: UserConfiguration,
            libraries: Libraries
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};