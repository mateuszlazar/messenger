import React from "react";

export const Error = ({ error }: any) => (
  <div>
    <h1>Whoops</h1>
    <p>{`Sorry, something went wrong. We're looking into it.`}</p>
    <div style={{ fontFamily: "monospace" }}>
      {error ? error.message : null}
    </div>
    <a href="/">Go to the homepage</a>
  </div>
);
