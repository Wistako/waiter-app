import { startRequest, endRequest } from './loadingRedux';
import { API_URL } from '../config';

// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);
export const getTablesLength = ({ tables }) => tables.length;


// action name creator
const createActionName = name => `app/table/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');
const REMOVE_TABLE = createActionName('REMOVE_TABLE');

// action 
export const fetchTables = () => {
  return (dispatch) => {
    fetch(API_URL + '/tables')
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
    fetch(API_URL + 'tables/' + upTable.id, options)
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
    fetch(API_URL + '/tables', options)
      .then(res => res.json())
      .then(() => dispatch(addTable(newTable)))
      .then(() => dispatch(endRequest()))
  }
}

export const removeTable = payload => ({payload, type: REMOVE_TABLE });
export const removeTableRequest = ({id}) => {
  console.log(id);
  return (dispatch) => {
    dispatch(startRequest());
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    fetch(API_URL + 'tables/' + id, options)
      .then(res => res.json())
      .then(() => dispatch(removeTable({id})))
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
    case REMOVE_TABLE:
      return statePart.filter(table => table.id !== action.payload.id)
    default:
      return statePart;
  }
}

export default tableReducer;