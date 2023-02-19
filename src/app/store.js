import { configureStore } from '@reduxjs/toolkit';
//import { reducer as formReducer } from 'redux-form';
import reducers from './reducers';

const store = configureStore({
  reducer: reducers,
});

export default store;

