import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import EditBalance from "./EditBalance";

export const bottomSheets = [
  {
    component: EditBalance,
    name: 'EditBalance',
    snapPoints: ['70%'],
  },
];

export const BOTTOM_SHEET_OPTIONS = {
  presentation: 'transparentModal',
  headerShown: false,
  contentStyle: { backgroundColor: 'transparent' },
} as NativeStackNavigationOptions;
