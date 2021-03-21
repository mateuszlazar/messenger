import React, { useEffect, useState } from "react";
import Firebase from "firebase/app";
import { IFirebaseAuthProps } from "./IFirebaseAuth";
import logIn from "actions/logIn";
import { useRecoilState } from "recoil";
import { authState } from "store/auth";

// @ts-ignore : @todo
export const FirebaseAuth: React.FC<IFirebaseAuthProps> = () => {
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(
    () =>
      Firebase.auth().onAuthStateChanged(
        (auth: any) => {
          setAuth(auth);
          setLoading(false);
        },
        (error: any) => {
          setError(error);
          setLoading(false);
        }
      ),
    []
  );

  if (loading) {
    return "...";
  }
  if (error) {
    return "⚠️ login error";
  }
  if (auth) {
    return <span> loggen in</span>;
  } else {
    return <button onClick={logIn}>log in</button>;
  }
};
