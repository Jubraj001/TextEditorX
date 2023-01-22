import { useState } from 'react';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar title="TextEditorX" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <TextForm showAlert={showAlert} mode={mode}/>
        {/* <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode}/>} />
          <Route exact path="/about" element={<About mode={mode}/>} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
