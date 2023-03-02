import {
	legacy_createStore,
	combineReducers,
	compose,
	applyMiddleware,
} from "redux";
import thunk from "redux-thunk";

import { reducer as appReducer } from "./AppReducer/reducer";
import { reducer as authReducer } from "./AuthReducer/reducer";

const MainReducer = combineReducers({ appReducer, authReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
	MainReducer,
	composeEnhancers(applyMiddleware(thunk))
);
