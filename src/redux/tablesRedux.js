
// selectors
export const getTable = ({ table }) => table;

// action name creator
const createActionName = name => `app/table/${name}`;


// action 

// reducer
const tableReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  }
}

export default tableReducer;