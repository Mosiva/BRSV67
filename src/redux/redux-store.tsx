import { Action,applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { ThunkAction } from 'redux-thunk'
import developerReducer from "./developers-reducer";

let rootReducers = combineReducers({
    developersPage: developerReducer

})

type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>


//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducers, composeEnhancers(compose(applyMiddleware(thunkMiddleware))))
//@ts-ignore
window._store_ = store


export default store