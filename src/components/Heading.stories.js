import React from "react";
import Heading from "./Heading";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Components|Heading",
  component: Heading,
};

export const usage = () => (
  <React.Fragment>
    <Heading>
      <h1>{text("Title 1", "Título 1")}</h1>
    </Heading>
    <Heading>
      <h2>{text("Title 2", "Título 2")}</h2>
    </Heading>
    <Heading>
      <h3>{text("Title 3", "Título 3")}</h3>
    </Heading>
    <Heading>
      <h4>{text("Title 4", "Título 4")}</h4>
    </Heading>
    <Heading>
      <h5>{text("Title 5", "Título 5")}</h5>
    </Heading>
    <Heading>
      <h6>{text("Title 6", "Título 6")}</h6>
    </Heading>
  </React.Fragment>
);
