import { atom } from "recoil";

export const authState = atom({
  key: "authState",
  default: {
    displayName: "",
    photoURL: "",
    email: "",
  },
});
