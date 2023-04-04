
import './App.css';
import About from './modules/About';
import Navbar from './modules/Navbar'
import { useState } from 'react';
import Textarea from './modules/Textarea';
import Alert from './modules/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = function () {
    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "gray"
      showAlert("dark mode enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white"
      showAlert("light mode enabled","success");
    }
  }
  const [alert, setAlert] = useState(null)
  const showAlert = function(message,type) {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  return (
   <>
   <Router>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/" element={<Textarea mode={mode} showAlert={showAlert}/>}/>
        <Route path="/about" element={<About mode={mode}/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
