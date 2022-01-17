import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import testSliceReducer from './testSlice';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSage';
import SearchReducer from 'screens/Home/SearchSlice';



const rootReducer = combineReducers({
  test: testSliceReducer,
  search: SearchReducer
});

const sagaMiddleWare = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
