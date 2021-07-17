import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import developerReducer from "./developers-reducer";

let rootReducers = combineReducers({
    developersPage: developerReducer

})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(compose(applyMiddleware(thunkMiddleware))))

window._store_ = store


export default store