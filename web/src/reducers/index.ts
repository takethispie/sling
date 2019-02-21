import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const appReducer = combineReducers({
  form,
});

export default function (state: any, action: any) {
  if (action.type === 'LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
}