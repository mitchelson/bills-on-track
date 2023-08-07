import { NativeStackScreenProps } from "@react-navigation/native-stack";

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
