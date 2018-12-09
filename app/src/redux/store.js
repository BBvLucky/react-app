import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers.js";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = ({ getState }) => {
//     return next => action => {
//         console.log('will dispatch', action);
//         const returnValue = next(action);
//         console.log('after dispatch', getState());
//         return returnValue;
//     }
// }
const middleware = composeEnhancers(applyMiddleware(thunk));

export default createStore(reducers, middleware);