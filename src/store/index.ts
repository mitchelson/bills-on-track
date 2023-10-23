import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";

export default (features = [], initialState = {}) => {
  const reducers = features;

  const persistConfig = {
    key: "@BOT:",
    storage: AsyncStorage,
    whitelist: ["transactions", "user", "accounts"],
    stateReconciler: autoMergeLevel2,
  };

  const rootReducer = combineReducers(reducers);

  const middlewares = [thunk];

  // @ts-expect-error TS(2345): Argument of type 'Reducer<CombinedState<unknown[]>... Remove this comment to see the full error message
  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    // @ts-expect-error TS(2345): Argument of type '{}' is not assignable to paramet... Remove this comment to see the full error message
    initialState,
    compose(applyMiddleware(...middlewares)),
  );

  const persistor = persistStore(store);
  return { store, persistor, useSelector, useDispatch };
};
