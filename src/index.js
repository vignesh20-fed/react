import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import Home from "./components/home.js"
// import Parent from './props/parent.js';
// import State from './state function/state.js';
import Child from './state class/class';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      {/* <Home />
      <Parent /> */}
      {/* <State /> */}
      <Child />
    </div>
);


