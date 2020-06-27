export const LIBRARIES = [
    {
      id: 0,
      name: 'Biblioteca',
      url: 'https://docs.google.com/spreadsheets/d/1lZCJttcCspeHjTGfsjGy7VYvi-kEqxlcteF7lOQUYKI',
      items: {
        sheet: {
          gid: 0,
          name: 'Biblioteca Física',
          startingRow: 2,
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
      }
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