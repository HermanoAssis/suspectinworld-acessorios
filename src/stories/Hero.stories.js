import React from "react";

import Hero from "../components/Hero";
import BgNecklaceImage from "./assets/bg-necklace.jpg";

export default {
  title: "Hero",
  component: Hero,
};

export const usage = () => (
  <Hero
    title={
      <span>
        Melhore seu <strong>visual</strong>
        <br /> de acordo com seu gosto
      </span>
    }
    image={BgNecklaceImage}
  >
    <ul>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </ul>
    <button>Compre agora</button>
  </Hero>
);
