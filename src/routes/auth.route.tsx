import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "../screens/Auth";
import TermsOfUse from "../screens/TermsOfUse";

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <Stack.Screen name="Login" component={Auth} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
