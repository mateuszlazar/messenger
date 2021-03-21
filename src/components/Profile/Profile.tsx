import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { useRecoilState } from "recoil";

import { RoomsService } from "services/rooms";
import { IRoom } from "services/rooms/IRoom";
import { authState } from "store/auth";

export const Profile: React.FC<any> = () => {
  const [newRoomName, setNewRoomName] = useState<string>("");
  const [rooms, setRooms] = useState<IRoom[]>([]);

  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    RoomsService.onUpdate(setRooms);
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
            <section>
              <p>{room.name}</p>
              <button onClick={() => RoomsService.remove(room)}>
                DELETE {room.name} ROOM
              </button>
            </section>
          ))}
          <input
            onChange={(e) => setNewRoomName(e.target.value)}
            value={newRoomName}
          />
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
