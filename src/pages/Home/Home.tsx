import React from "react";

import logIn from "../../actions/logIn";
import { Profile, Error, FirebaseAuth } from "components";

export const Home = () => (
  <>
    <FirebaseAuth>
      {({ isLoading, error, auth }) => {
        if (isLoading) {
          return <p>loading...</p>;
        }

        if (error) {
          return <Error error={error} />;
        }

        if (!auth) {
          return (
            <div>
              <p>Log in to see your account</p>
              <button onClick={logIn}>Log in</button>
            </div>
          );
        }

        return (
          <div>
            <Profile auth={auth} />
            <hr />
          </div>
        );
      }}
    </FirebaseAuth>
  </>
);
