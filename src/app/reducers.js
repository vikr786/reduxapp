import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  // add your reducers here
  form: formReducer,
});

export default rootReducer;
