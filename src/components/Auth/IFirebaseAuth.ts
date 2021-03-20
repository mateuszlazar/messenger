import { ReactNode } from "react";

export interface IFirebaseAuthProps {
  children: ({ auth, error, loading }: any) => ReactNode;
}
