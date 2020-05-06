import * as React from "react";
import { hot } from "react-hot-loader";

const App = () => (
    <main className="app">
       <h1>Hello React!</h1>
       <salt-button> I'm a Web Component </salt-button>
    </main>
);

declare let module: object;

export default hot(module)(App);
