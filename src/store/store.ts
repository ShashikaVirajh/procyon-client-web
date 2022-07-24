import { configureStore } from '@reduxjs/toolkit';
import { PERSIST, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { IS_DEV_APP } from 'config';
import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const setMiddleware = (getDefaultMiddleware: Function): any =>
  getDefaultMiddleware({
    thunk: false,
    serializableCheck: { ignoredActions: [PERSIST] },
  }).concat(middlewares);

const store = configureStore({
  reducer: rootReducer,
  devTools: IS_DEV_APP,
  middleware: setMiddleware,
});

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export { store, persistor };
