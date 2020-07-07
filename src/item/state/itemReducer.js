import * as ActionTypes from './itemActions';
import gapi from 'gapi';

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
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                apiKey: library.apiKey,
                clientId: library.clientId,
                discoveryDocs: library.discoveryDocs,
                scope: library.scopes
            })}
        )
        .then(response => {
            window.gapi.client.sheets.spreadsheets.values.get({
                spreadsheetId: library.spreadsheetId,
                range: sheet.name + '!' + sheet.leftmostColumn + sheet.startingRow + ':' + sheet.rightmostColumn + sheet.startingRow,
            })
            .then(response => {
                var range = response.result;
                if (range.values.length > 0) {
                    for (var i = 0; i < range.values.length; i++) {
                        var row = range.values[i];
                        // Print columns A and E, which correspond to indices 0 and 4.
                        console.log(row[0] + ', ' + row[4]);
                    }
                }
                else {
                    throw new Error('No data found.');
                }
            }, response => {
                var error = new Error(response.result.error.message);
                error.response = response.result.error;
                throw error;
            })
        }, error => {
            var errmess = new Error(JSON.stringify(error));
            throw errmess;
        })
        .then(response => response.json())
        .then(items => dispatch(itemsAdd(items)))
        .catch(error => {
            console.log('Error ', error.message)
        });
    };
};