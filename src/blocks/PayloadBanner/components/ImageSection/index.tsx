import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Ensure Tailwind is imported here
import EveCollection from "../../layouts/CollectionSection/Component";


const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <div className="min-h-screen bg-white">
      <EveCollection/>
    </div>
  </React.StrictMode>
);