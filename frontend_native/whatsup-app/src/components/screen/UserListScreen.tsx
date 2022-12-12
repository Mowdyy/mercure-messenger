import React from "react";
import NeedAuth from "../NeedAuth";
import UserList from "../UserList";

export default function HomeScree() {
  return (
    <NeedAuth>
      <UserList />
    </NeedAuth>
  );
}
