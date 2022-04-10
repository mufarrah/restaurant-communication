// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./components/App";


// ReactDOM.render(<App />, document.getElementById("root"));
// --

// import * as ReactDOMClient from 'react-dom/client';
// import App from "./components/App";
// import React from "react";

// const container = document.getElementById('root');
// const root = ReactDOMClient.hydrateRoot(container, <root tab="home" />);

import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
const container = document.getElementById('root');
// Create a root.
const root = ReactDOM.createRoot(container);
// Initial render: Render an element to the root.
root.render(<App tab="home" />);
// During an update, there's no need to pass the container again.
root.render(<App tab="profile" />);





