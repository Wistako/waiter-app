// selector
export const getLoading = ({ loading }) => loading;

// action name creator
const createActionName = name => `app/loading/${name}`;
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');

// action creators
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });

// reducer
const loadingReducer = (statePart = false, action) => {
  switch (action.type) {
    case START_REQUEST:
      return true;
    case END_REQUEST:
      return false;
    default:
      return statePart;
  }
}
export default loadingReducer;