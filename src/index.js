import React from "react";
import ReactDOM from "react-dom";

import {ScreenShot} from "./lib";


const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <ScreenShot/>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));