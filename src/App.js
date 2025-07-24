
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#03224e';
      showAlert("Dark mode has been enabled", "success")
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Dark mode has been enabled", "success")
    }
  }
  return (
    <div>
       {/* <Navbar title="TextUtils" about="About"/> */}
       <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       <div className="container my-3">
       <TextForm showAlert={showAlert} heading ="Type below" mode={mode}/>
       {/* <About /> */}
       </div>
    </div>
 
  );
}

export default App;
