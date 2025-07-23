
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03224e';
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
       {/* <Navbar title="TextUtils" about="About"/> */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <div className="container my-3">
       <TextForm heading ="Type below" mode={mode}/>
       {/* <About /> */}
       </div>
    </div>
 
  );
}

export default App;
