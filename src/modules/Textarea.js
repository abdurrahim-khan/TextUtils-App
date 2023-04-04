import {React, useState} from 'react'
import { useSpeechSynthesis } from 'react-speech-kit';
export default function Textarea(props) {

  const darkStyle = {
    backgroundColor: "black",
    color: "white"
}
const lightStyle = {
    backgroundColor: "white",
    color: "black"
}
  
 const {speak} = useSpeechSynthesis();
 const speechHandler = function () {
  speak({text})
  props.showAlert("speech enabled","success")
 }
  const [text, setText] = useState("");
  const changeHandler = function(event){
    setText(event.target.value);
  }
  const caseHandler = function(args) {
    /*if(args==="u")
    setText(text.toUpperCase());
    else setText(text.toLowerCase());*/
    (args==="u") ?  setText(text.toUpperCase()) :  setText(text.toLowerCase());
    props.showAlert("case updated","success")
  }
  const clear = function () {
    setText('');
    props.showAlert("text cleared","success")
  }
  const wordCounter = function () {
    let arr = text.split(' ');
    arr = arr.filter((value)=>{
      return  value === "" ? false : true;
    })
    return arr.length;
  }
  const clipboard = function() {
    navigator.clipboard.writeText(text);
    props.showAlert("copied to clipboard","success")
  }
  return (
    <>
    <div style={(props.mode==="dark"? darkStyle : lightStyle)} className='container my-1'>
        <h4>Enter text below</h4>
        <div className="form">
            <textarea  style={(props.mode==="dark"? {backgroundColor: "#332f2f",height : "300px", color:"white"} : {backgroundColor: "white",height : "300px",color: "black"})} value={text} onChange={changeHandler} className="form-control" id="floatingTextarea"></textarea>
            
        </div>
        <button disabled={text.length===0} className='btn btn-primary my-2' onClick={()=>{caseHandler("u")}}>toUpperCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={()=>{caseHandler("l")}}>toLowerCase</button>
        <button disabled={text.length===0} className='btn btn-primary my-2' onClick={clear}>clear</button>
        <button disabled={text.length===0} className='btn btn-primary my-2 mx-1' onClick={clipboard}>copy to clipboard</button>
        <button disabled={text.length===0} className='btn btn-primary my-2' onClick={speechHandler}>speech</button>
    </div>
    <div style={(props.mode==="dark"? darkStyle : lightStyle)}  className='container'>
        <p>{wordCounter()} words and {text.length} characters</p>
        <p>{0.008*wordCounter()} minutes read</p>
        <h4>Preview</h4>
        <p>{(text.length>0)?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
