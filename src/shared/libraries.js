export const LIBRARIES = [
    {
      id: 0,
      name: 'Biblioteca',
      spreadsheetId: '1lZCJttcCspeHjTGfsjGy7VYvi-kEqxlcteF7lOQUYKI',
      clientId: '191135084193-hl3f64o9slp3rmdfdsfouose42l673u9.apps.googleusercontent.com',
      apiKey: 'AIzaSyCoHBbrOs12Ji_eZRM4B6Hy-R73J_kv64Y',
      discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
      scopes: 'https://www.googleapis.com/auth/spreadsheets.readonly',
      items: {
        sheet: {
          gid: 0,
          name: 'Biblioteca Física',
          startingRow: 2,
          leftmostColumn: 'A',
          rightmostColumn: 'F',
          columns: {
            uuid: 'A',
            title: 'E',
            author: 'D',
            ISBN: 'F',
            imageUrl: ''
          }
        }
      },
      tags: {
        sheet: {
          gid: 752801964,
          name: 'Etiquetas',
          startingRow: 2,
          columns: {
            uuid: 'A',
            name: 'B'
          }
        }
      },
      readersTracking: {
        sheet: {
          gid: 722092815,
          name: 'Lectores',
          nameRow: 1,
          startingRow: 2,
        }
      }
    }
  ];