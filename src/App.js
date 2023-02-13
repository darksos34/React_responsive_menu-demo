import React, {useState} from "react";

import './App.css';
import NavComponent from "./components/nav/NavComponent";
import '././components/pages/darkMode.css'

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
