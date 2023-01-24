import './App.css';
import Navbar2 from './components/Navbar2';
import Alert from './components/Alert';
import About from './components/About';
import TextForm from './TextForm';
import React,{useState} from 'react'
import {
  BrowserRouter as Router,
   Routes ,
   Route,
} from "react-router-dom";


function App() {

  let toDarkMode = () => {

    if ( mode === "light"){
        setBtnText("Enable Light Mode") 
        setMode("dark");
        document.body.style.backgroundColor = "#0A0A0A";
        showAlert("Dark mode activated","success")
        document.title = "TextUtils - dark mode"

    }

    else {
      setBtnText("Enable Dark Mode")
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode activated","success")
      document.title = "TextUtils - light mode"

    }

  }

  let showAlert = (massege,type)=>{
      setAlert({
        massege : massege,
        type : type  
      })
      setTimeout(()=>{
        setAlert(null)
      }, 1500 );
  }

  const [mode , setMode] = useState("light")
  const [btnText , setBtnText] = useState("Enable Dark Mode")
  const [alert , setAlert] = useState(null)

  return (
    <Router>
      <Navbar2 title="TextUtils" about="about " mode = {mode} toDarkMode={toDarkMode} btnText = {btnText} />
      <Alert alert = {alert}/>
      <Routes>
          <Route exact path="/" element={< TextForm heading="Enter the text to analyze "  showAlert = {showAlert} mode = {mode} />} />
          <Route exact path="/about" element={<About/>} />
      </Routes>
   </Router>
  );
}

export default App;
