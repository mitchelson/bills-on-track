import { NativeStackScreenProps } from "@react-navigation/native-stack";

// ================ App Route Props ================ \\

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;

export type AppTabParamList = {
  HomeScreen: HomeScreenProps;
  NewTransaction: undefined;
  DetailsTransactions: undefined;
  Report: undefined;
  Settings: undefined;
};

// ================ Auth Route Props ================ \\

export type WelcomeScreenProps = NativeStackScreenProps<
  AuthTabParamList,
  'Welcome'
>;
export type LoginScreenProps = NativeStackScreenProps<
  AuthTabParamList,
  'Login'
>;
export type RegisterScreenProps = NativeStackScreenProps<
  AuthTabParamList,
  'Register'
>;
export type TermsOfUseScreenProps = NativeStackScreenProps<
  AuthTabParamList,
  'TermsOfUse'
>;

export type RecoverPassScreenProps = NativeStackScreenProps<
  AuthTabParamList,
  'RecoverPass'
>;

export type AuthTabParamList = {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  TermsOfUse: undefined;
  RecoverPass: undefined;
};
