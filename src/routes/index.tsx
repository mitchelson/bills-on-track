import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BOTTOM_SHEET_OPTIONS, bottomSheets } from "../components/BottomSheets";
import { WrapWithBottomSheet } from "../components/BottomSheets/BottomSheet";
import StackRoutes from "./app.route";
import AuthRoutes from "./auth.route";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.user);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {isLogged ? (
        <Stack.Screen name="AppRoutes" component={StackRoutes} />
      ) : (
        <Stack.Screen name="AuthRoutes" component={AuthRoutes} />
      )}
      {bottomSheets.length > 0 && (
        <Stack.Group screenOptions={BOTTOM_SHEET_OPTIONS}>
          {bottomSheets.map((bottom) => {
            const Component = bottom.component;
            return (
              <Stack.Screen key={bottom.name} name={bottom.name}>
                {(props) => (
                  <WrapWithBottomSheet
                    hideCloseButton={false}
                    snapPoints={bottom.snapPoints || ["65%"]}
                  >
                    <Component {...props} />
                  </WrapWithBottomSheet>
                )}
              </Stack.Screen>
            );
          })}
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
