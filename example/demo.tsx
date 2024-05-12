import React from "react";
import { createRoot } from "react-dom/client";
import { Observations } from "../src/index";
import "./demo.css";

const container = document.getElementById("home");
const root = createRoot(container!);

root.render(
  <div>
    <h1>React iNaturalist Demo Page</h1>
    <Observations
      user_id={["kkarpack"]}
      per_page={16}
      order_by="observed_on"
      order="desc"
      rank={["species", "hybrid"]}
      without_taxon_id={[47158]} /* Exclude insects */
    />
  </div>
);
