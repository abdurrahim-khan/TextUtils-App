import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar(props) {
    const darkStyle = {
        backgroundColor: "black",
        color: "white"
    }
    const lightStyle = {
        backgroundColor: "white",
        color: "black"
    }
    /*const [style, setStyle] = useState(lightStyle);
    const [btnText, setBtnText] = useState("Dark mode");
    const [checkStatus, setcheckStatus] = useState(true)*/
    /* const toggleHandler = function() {
        props.toggleMode();
        //aboutToggleHandler();
        if(props.mode === "dark")
        {
            setStyle(darkStyle);
            setBtnText("Light mode")
            setcheckStatus(false)
        }
        else{
            setStyle(lightStyle);
            setBtnText("Dark mode")
            setcheckStatus(true)
        }
    }*/
     
    
  return (
<nav className="navbar navbar-expand-lg" style={props.mode==="dark" ? darkStyle : {backgroundColor : "#f0f0f0"}}>
  <div className="container-fluid"  style={props.mode==="dark" ? darkStyle : {backgroundColor : "#f0f0f0"}}>
    <Link style={props.mode==="dark" ? darkStyle : {backgroundColor : "#f0f0f0"}} className="navbar-brand" to="/">TextUtils</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{transition: "none !important"}}>
        <li className="nav-item" style={props.mode==="dark" ? darkStyle : lightStyle}>
          <Link style={props.mode==="dark" ? darkStyle : {backgroundColor : "#f0f0f0"} }className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item" style={props.mode==="dark" ? darkStyle : lightStyle}>
          <Link style={props.mode==="dark" ? darkStyle : {backgroundColor : "#f0f0f0"}} className="nav-link" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div class="form-check form-switch mx-2">
    <input class="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.mode==="dark" ? false : true}/>
    <label class="form-check-label" for="flexSwitchCheckDefault">{props.mode==="dark" ? "enable light" : "enable dark"}</label>
</div>
    </div>
  </div>
</nav>
  )
}
