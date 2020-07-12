import * as ActionTypes from './searchActions';
import { makePlain } from '../../util/util';

export const Search = (state = {
    field: 'all',
    query: '',
    items: []
}, action) => {
switch (action.type) {
    case ActionTypes.SEARCH_LOAD_RESULTS:
        return {...state, field: action.field, query: action.query, items: action.items};

    default:
        return state;

}
}

export const searchLoadResults = (search) => ({
    type: ActionTypes.SEARCH_LOAD_RESULTS,
    field: search.field,
    query: search.query,
    items: search.items
});

export const searchLookup = (search) => (dispatch, getState) => {
    const { items } = getState();

    var query = makePlain(search.query);
    var result = [];
    switch(search.field){
        case 'all':
            items.items.forEach((item) => {
                if ((item.author_plain + item.title_plain + item.isbn_plain).includes(query))
                    result.push(item);
            });
            break;
        case 'author':
            items.items.forEach((item) => {
                if (item.author_plain.includes(query))
                    result.push(item);
            });
            break;
        case 'title':
            items.items.forEach((item) => {
                if (item.title_plain.includes(query))
                    result.push(item);
            });
            break;
        case 'isbn':
            items.items.forEach((item) => {
                if (item.ISBN_plain.includes(query))
                    result.push(item);
            });
            break;
    }

    dispatch(searchLoadResults({ field: search.field, query: search.query, items: result}));
};
