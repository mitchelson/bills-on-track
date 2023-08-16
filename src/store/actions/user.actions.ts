import auth from "@react-native-firebase/auth";
import { User } from "../../types";
import * as keys from "../constants/user";

export const logIn = (userData: User) => {
  return (dispatch: any) => {
    dispatch({ type: keys.SAVE_USER_DATA, payload: userData });
  };
};

export const logOf = () => {
  auth().signOut();
  return (dispatch: any) => {
    dispatch({ type: keys.DELETE_USER_DATA, payload: null });
  };
};

export const setTimeOnApp = () => {
  return (dispatch: any) => {
    dispatch({ type: keys.SET_USER_TIME_ON_APP, payload: null });
  };
}
