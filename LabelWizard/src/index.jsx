import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

const applicationRoot = document.getElementById("LabelWizard");
const domRoot = ReactDOM.createRoot(applicationRoot);

domRoot.render(<App/>);
