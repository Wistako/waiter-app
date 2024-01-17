
// selectors
export const getAllTables = ({ tables }) => tables;
export const getTableById = ({ tables }, tableId) => tables.find(table => table.id === tableId);

// action name creator
const createActionName = name => `app/table/${name}`;
const UPDATE_TABLES = createActionName('UPDATE_TABLES');


// action 
export const updateTables = payload => ({ payload, type: UPDATE_TABLES });
export const fetchTables = () => {
  return (dispatch) => {
    fetch('http://localhost:3131/api/tables')
      .then(res => res.json())
      .then(tables => dispatch(updateTables(tables)))
  }
}
// reducer
const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLES:
      return[...action.payload]
    default:
      return statePart;
  }
}

export default tableReducer;