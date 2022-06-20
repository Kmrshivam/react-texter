import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not

  const toggleMode = ()=>{
    if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#070d5a';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
<>
   {/* <Navbar title="TextUtils3" aboutText="About TextUtils" />  */}
  {/* <Navbar /> */}
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
  <div className="container my-3">
  <TextForm heading="Enter the text to analyze below  " mode={mode} />
  {/* <About/> */}
  </div>
</>
 );
}

export default App;
