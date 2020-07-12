import * as ActionTypes from './itemActions';
import { gapi } from 'gapi-script'
import { makePlain } from '../../util/util';

export const Items = (state = {
    isLoading: true,
    errMess: null,
    items: []
}, action) => {
switch (action.type) {
    case ActionTypes.ITEMS_ADD:
        return {...state, isLoading: false, errMess: null, items: action.payload};

    default:
        return state;

}
}

export const itemsAdd = (items) => ({
    type: ActionTypes.ITEMS_ADD,
    payload: items
});

export const itemsFetch = (library) => {
    var sheet = library.items.sheet;
    return (dispatch) => {
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: library.apiKey,
                clientId: library.clientId,
                discoveryDocs: library.discoveryDocs,
                scope: library.scopes
            })
            .then(response => {
                gapi.client.sheets.spreadsheets.values.get({
                    spreadsheetId: library.spreadsheetId,
                    range: sheet.name + '!' + sheet.leftmostColumn + sheet.startingRow + ':' + sheet.rightmostColumn,
                })
                .then(response => {
                    var range = response.result;
                    if (range.values.length > 0) {
                        var items = [];
                        var indexUuid = getColumnNumber(sheet.columns.uuid) - 1;
                        var indexTitle = getColumnNumber(sheet.columns.title) - 1;
                        var indexAuthor = getColumnNumber(sheet.columns.author) - 1;
                        var indexIsbn = getColumnNumber(sheet.columns.ISBN) - 1;
                        var indexImageUrl = getColumnNumber(sheet.columns.imageUrl) - 1;
                        for (var i = 0; i < range.values.length; i++) {
                            var row = range.values[i];
                            var item = {
                                uuid: row[indexUuid] ? row[indexUuid] : '',
                                title: row[indexTitle] ? row[indexTitle] : '',
                                author: row[indexAuthor] ? row[indexAuthor] : '',
                                ISBN: row[indexIsbn] ? row[indexIsbn] : '',
                                imageUrl: row[indexImageUrl] ? row[indexImageUrl] : ''
                            };
                            item.title_plain = makePlain(item.title);
                            item.author_plain = makePlain(item.author);
                            item.ISBN_plain = makePlain(item.ISBN);
                            items.push(item);
                        }
                        return items;
                    }
                    else {
                        throw new Error('No data found.');
                    }
                }, response => {
                    var error = new Error(response.result.error.message);
                    error.response = response.result.error;
                    throw error;
                })
                .then(items => dispatch(itemsAdd(items)))
            }, error => {
                var errmess = new Error(JSON.stringify(error));
                throw errmess;
            })
            .then(response => {
                 return response.json()
             })
            .catch(error => {
                console.log('Error ', error.message)
            });
        });
    };
};

function getColumnNumber(columnLetters) {
    var val = columnLetters.toUpperCase();
    var base = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', i, j, result = 0;
    for (i = 0, j = val.length - 1; i < val.length; i += 1, j -= 1)
      result += Math.pow(base.length, j) * (base.indexOf(val[i]) + 1);
    return result;
  };