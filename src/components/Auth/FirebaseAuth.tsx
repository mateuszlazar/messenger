import React, { useEffect, useState } from "react";
import Firebase from "firebase/app";
import { IFirebaseAuthProps } from "./IFirebaseAuth";

// @ts-ignore : @todo
export const FirebaseAuth: React.FC<IFirebaseAuthProps> = ({ children }) => {
  const [error, setError] = useState<any>(null);
  const [auth, setAuth] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

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

  return children({ auth, error, loading });
};
