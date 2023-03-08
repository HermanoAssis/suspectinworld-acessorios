import React from "react";

import Hero from "../components/Hero";
import BgNecklaceImage from "./assets/bg-necklace1.jpg";
import Heading from "../components/Heading";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero image={BgNecklaceImage}>
    <Heading>
      <h1>
        Melhore seu <strong>visual</strong>
        <br /> de acordo com seu gosto
      </h1>
    </Heading>
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
    <button>Compre agora</button>
  </Hero>
);
