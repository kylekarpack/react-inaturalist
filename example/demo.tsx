import React from "react";
import { render } from "react-dom";
import { Observations } from "../src/index";

render(
  <div>
    <h1>React iNaturalist Demo Page</h1>
    <Observations />
  </div>,
  document.getElementById("home")
);
