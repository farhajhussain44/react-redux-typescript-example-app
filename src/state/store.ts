import { createStore, applyMiddleware ,compose} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

   
export const store = createStore(reducers, {}, compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)  );
