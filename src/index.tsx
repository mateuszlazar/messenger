import "firebase/auth";
import "firebase/firestore";

import Firebase from "firebase/app";
import React from "react";
import ReactDOM from "react-dom";
import App from "app";

Firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

ReactDOM.render(<App />, document.getElementById("root"));
