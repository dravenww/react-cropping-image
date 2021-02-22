import React from "react";
import ReactDOM from "react-dom";

import ScreenShot from "./lib";

import image from './demo.jpeg'

import './index.sass'

const App = () => (
    <div style={{ width: 640, margin: "15px auto" }}>
        <h1>Hello React</h1>
        <section className="img-container">
            <ScreenShot
                img={image}
            >
            </ScreenShot>
        </section>
    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));