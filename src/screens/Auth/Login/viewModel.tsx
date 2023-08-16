import { ReactNativeFirebase } from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import * as AuthGoogle from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { androidClientId, iosClientId } from "../../../keys";
import { logIn, logOf } from "../../../store/actions/user.actions";

export const useLogin = () => {
  AuthGoogle.AuthRequest;

  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const [loading, setLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId,
    iosClientId,
  });

  const signIn = async (email: string, pass: string) => {
    try {
      const { user } = await auth().signInWithEmailAndPassword(email, pass);
      console.log("user => ", user);
    } catch (err) {
      const error = err as ReactNativeFirebase.NativeFirebaseError;
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(error);
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) return;
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const user = await response.json();
      dispatch(logIn(user));
    } catch (err) {}
  };

  const handleSingInWithGoogle = async () => {
    if (!isLogged) {
      setLoading(true);
      if (
        response?.type === "success" &&
        response.authentication?.accessToken
      ) {
        await getUserInfo(response.authentication?.accessToken);
        setLoading(false);
      } else {
        dispatch(logOf());
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    handleSingInWithGoogle();
  }, [response]);

  return {
    signIn,
    promptAsync,
    loading,
  };
};
