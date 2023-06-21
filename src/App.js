import React, {useState} from "react";

import './App.css';
import NavComponent from "./Components/Nav/NavComponent";
import './Components/Darkmode/darkMode.css'

const App = () => {
  const [theme] = useState('light');

  return (
      <>
        <div className={`App${theme}`}>
          <NavComponent/>
        </div>
      </>

  );
}
export default App;
