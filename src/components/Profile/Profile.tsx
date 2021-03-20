import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";

import { RoomsService } from "services/rooms";
import { IRoom } from "services/rooms/IRoom";

export const Profile: React.FC<any> = ({ auth }) => {
  const [rooms, setRooms] = useState<IRoom[]>([]);

  useEffect(() => {
    RoomsService.get().then(setRooms);
  }, []);

  return (
    <Route
      render={({ history }) => (
        <div>
          <img
            src={auth.photoURL}
            alt={auth.displayName}
            width="100"
            height="100"
          />
          <p>
            <strong>{auth.displayName}</strong>
          </p>
          <p>{auth.email}</p>
          +++
          {rooms.map((room) => (
            <span>{room.name}</span>
          ))}
          <button onClick={() => RoomsService.add({ name: "Test" })}>
            CREATE ROOM
          </button>
          {/* <button onClick={() => logOut.then(() => history.push(`/`))}>
          log out
        </button> */}
        </div>
      )}
    />
  );
};