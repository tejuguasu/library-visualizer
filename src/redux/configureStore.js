import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserConfiguration } from '../userConfiguration/state/userConfigurationReducer';
import { Libraries } from '../library/state/libraryReducer';
import { Items } from '../item/state/itemReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            userConfiguration: UserConfiguration,
            libraries: Libraries,
            items: Items
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};