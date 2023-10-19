import dinero from "dinero.js";
import { Store } from "redux";
import { Persistor } from "redux-persist";
dinero.globalLocale = "pt-BR";

export const calcBalance = (value: number) => {
  const balance = dinero({
    amount: value,
    currency: "BRL",
  }).toFormat();

  return balance;
};

export const currencyView = (value: number) => {
  const real = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
  return real.format(value)
}


let store: Store | undefined;
let persistor: Persistor | undefined;

export const injectStore = (_store: Store, _persistor: Persistor) => {
  store = _store;
  persistor = _persistor;
};
