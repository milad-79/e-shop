import { createStore, compose, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
import ReduxReducer from "../reducer";


function ReduxStore(){
    const composeEn= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store= createStore(
        ReduxReducer,
        composeEn(applyMiddleware(promiseMiddleware))
    )

    return store;
}

export default ReduxStore;