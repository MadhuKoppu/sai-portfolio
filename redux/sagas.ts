// redux/sagas.ts
import { all } from 'redux-saga/effects';
// import { watchFetchProjects } from './sagas/projectSagas'; // Example saga, uncomment when needed

export default function* rootSaga(): Generator {
  yield all([
    // watchFetchProjects(), // Add your sagas here
  ]);
}