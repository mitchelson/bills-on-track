import { NavigationContainer } from "@react-navigation/native";
import { StatusBar, View } from "react-native";
// @ts-expect-error TS(2305): Module '"react-redux"' has no exported member 'Pro... Remove this comment to see the full error message
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/native";
import { injectStore } from "./src/common";
import Routes from "./src/routes";
import createStore from "./src/store";
import accounts from "./src/store/reducers/accounts.reducer";
import transactions from "./src/store/reducers/transactions.reducer";
import user from "./src/store/reducers/user.reducer";
import { darkTheme } from "./src/theme/colors";

const { store, persistor } = createStore({
  // @ts-expect-error TS(2345): Argument of type '{ auth: (state: { isLogged: bool... Remove this comment to see the full error message
  user,
  transactions,
  accounts,
});

injectStore(store, persistor);

export default function App() {
  return (
    <ThemeProvider theme={darkTheme as DefaultTheme}>
      <StatusBar barStyle={"dark-content"} backgroundColor="#333" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={{ flex: 1, backgroundColor: "#333" }}>
            <NavigationContainer>
              <Routes />
            </NavigationContainer>
          </View>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}
