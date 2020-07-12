import { createStore, combineReducers, applyMiddleware } from 'redux';
import { UserConfiguration } from '../userConfiguration/state/userConfigurationReducer';
import { Libraries } from '../library/state/libraryReducer';
import { Items } from '../item/state/itemReducer';
import { Search } from '../search/state/searchReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            userConfiguration: UserConfiguration,
            libraries: Libraries,
            items: Items,
            search: Search
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};