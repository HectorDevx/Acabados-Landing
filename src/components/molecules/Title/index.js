import React from "react";

import { Titles } from "./style";

export function Title({ title, description }) {
  return (
    <Titles>
      <h2>{title}</h2>
      <p>{description}</p>
    </Titles>
  );
}
