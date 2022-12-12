import React from "react";

import Home from "../Home";
import NeedAuth from "../NeedAuth";

export default function HomeScree() {
  return (
    <NeedAuth>
      <Home />
    </NeedAuth>
  );
}
