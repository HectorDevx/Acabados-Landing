import React from "react";

import { Btn } from "./style";

export function Button({ name, link }) {
  return (
    <a href={link}>
      <Btn>{name}</Btn>
    </a>
  );
}
