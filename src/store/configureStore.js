import { applyMiddleware, combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authorReducer from "./reducers/author";
import bookReducer from "./reducers/book";
import categoryReducer from "./reducers/category";
import reviewReducer from "./reducers/review";
import utilReducer from "./reducers/util";
import authReducer from "./reducers/auth";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const storeConfig = () => {
  const rootReducer = combineReducers({
    author: authorReducer,
    book: bookReducer,
    category: categoryReducer,
    review: reviewReducer,
    util: utilReducer,
    auth: authReducer,
  });

  const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
  );
  let persistor = persistStore(store);

  return { store, persistor };
};

export default storeConfig;
