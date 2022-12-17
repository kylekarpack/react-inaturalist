import React from "react";
import { createRoot } from "react-dom/client";
import { Observations } from "../src/index";

const container = document.getElementById("home");
const root = createRoot(container!);

root.render(
  <div>
    <h1>React iNaturalist Demo Page</h1>
    <Observations user_id={["kkarpack"]} per_page={30} />
  </div>
);
