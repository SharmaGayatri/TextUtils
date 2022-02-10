//import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React, {useState} from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
 const [mode, setMode] = useState('light');
 const [alert, setAlert] = useState(null);
  
 const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
     })
     setTimeout(() => {
       setAlert(null)
     }, 1500);
 }

   const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#041939';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }

  }
  return (
    <>
    {/* <Router> */}
  <Navbar title= "TextUtils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <div className ="container my-3">
  {/* <Routes>
          <Route exact path="/about" element={<About />}>
          </Route>
          <Route exact path="/" element={ */}
          <TextForm showAlert= {showAlert} heading="Enter your text below" mode={mode}/>
           {/* </Route>
        </Routes> */}
  </div>  
  {/* </Router> */}
    </>
  ) 
}

export default App;
