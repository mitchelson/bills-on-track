import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import RecoverPass from "../screens/Auth/RecoverPass";
import Register from "../screens/Auth/Register";
import TermsOfUse from "../screens/Auth/TermsOfUse";
import Welcome from "../screens/Auth/Welcome";
import { AuthTabParamList } from "../types/navigation";

const Stack = createNativeStackNavigator<AuthTabParamList>();

const AuthRoutes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RecoverPass" component={RecoverPass} />
      <Stack.Screen name="TermsOfUse" component={TermsOfUse} />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
