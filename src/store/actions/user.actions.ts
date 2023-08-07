import { User } from "../../types";
import * as keys from "../constants/user";

export const logIn = (userData: User) => {
  return (dispatch: any) => {
    dispatch({ type: keys.SAVE_USER_DATA, payload: userData });
  };
};

export const logOf = () => {
  return (dispatch: any) => {
    dispatch({ type: keys.DELETE_USER_DATA, payload: null });
  };
};
