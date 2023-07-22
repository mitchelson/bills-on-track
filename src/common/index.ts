import dinero from "dinero.js";
import { Store } from "redux";
import { Persistor } from "redux-persist";
dinero.globalLocale = "pt-BR";

export const calcBalance = (value: number) => {
  const balance = dinero({
    amount: value,
    currency: "BRL",
    precision: 2,
  }).toFormat();

  return balance;
};

let store: Store | undefined;
let persistor: Persistor | undefined;

export const injectStore = (_store: Store, _persistor: Persistor) => {
  store = _store;
  persistor = _persistor;
};
