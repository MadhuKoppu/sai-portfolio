// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false, // Sagas handle side effects, so we disable thunks
      serializableCheck: {
        // You might need to adjust this if you have non-serializable values in actions or state,
        // especially when working with Redux-Saga or other middleware.
        ignoredActions: [],
      },
    }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

// Define RootState and AppDispatch types for better Redux typing
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;