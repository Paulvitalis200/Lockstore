import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import loginUserReducer from "./reducers/loginReducer";

const middleware = [thunk]

const reducers = combineReducers({
    auth: loginUserReducer
})

const initialState = {
    
}

const store = createStore(reducers, initialState, compose(applyMiddleware(...middleware), 
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    );

export default store