import { startRequest, endRequest } from './loadingRedux';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getTablesLength = ({ tables }) => tables.length;

// action name creator
const createActionName = name => `app/table/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');

// action 
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)))
  }
}

export const updateTables = payload => ({ payload, type: UPDATE_TABLES });

export const updateTable = payload => ({ payload, type: UPDATE_TABLE });
export const updateTableRequest = (upTable) => {
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(upTable),
    };
    fetch('http://localhost:3131/api/tables/' + upTable.id, options)
      .then(res => res.json())
      .then(() => dispatch(updateTable(upTable)))
      .then(() => dispatch(endRequest()))
  }
}
export const addTable = payload => ({ payload, type: ADD_TABLE });
export const addTableRequest = (newTable) => {
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTable),
    };
    fetch('http://localhost:3131/api/tables', options)
      .then(res => res.json())
      .then(() => dispatch(addTable(newTable)))
      .then(() => dispatch(endRequest()))
  }
}
// reducer
const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TABLE:
      return [...statePart, {...action.payload}]
    case UPDATE_TABLES:
      return[...action.payload]
    case UPDATE_TABLE:
      return statePart.map(table => table.id === action.payload.id ? action.payload : table)
    default:
      return statePart;
  }
}

export default tableReducer;