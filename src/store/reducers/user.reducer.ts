import { User } from "../../types";
import * as keys from "../constants/user";

export const initialState = {
  isLogged: false,
  profile: {} as User,
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case keys.SAVE_USER_DATA: {
      console.log("save user => ", action)
      return {
        isLogged: true,
        profile: action.payload
      };
    }
    case keys.DELETE_USER_DATA: {
      return {
        isLogged: false,
        profile: {}
      };
    }
    default: {
      return state;
    }
  }
};
export default user;