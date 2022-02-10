import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
  // console.log(Text);
   let newText =Text.toUpperCase();
   setText(newText);
  }
  const handleLpClick = ()=>{
    // console.log(Text);
     let newText =Text.toLowerCase();
     setText(newText);}

     const handleClrClick = ()=>{
      // console.log(Text);
       let newText =('');
       setText(newText);}

  const handleOnChange = (event)=>{
        setText(event.target.value);
   }
   const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
}
const handleTextToSpeech = () => {
  var msg = new SpeechSynthesisUtterance();
  msg.text = Text;     //  text what you written
  window.speechSynthesis.speak(msg);
};

const handleCopy = () => {
  navigator.clipboard.writeText(Text);
  props.showAlert("Text Copied","success");
}
// Every letter after a full stop will get converted into an upper case letter
const handle_1stChar_Click = () => {
  const arr = Text.split(". ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const newtext3 = arr.join(". ");
  setText(newtext3);
};

 
  const [Text, setText] = useState(" ");
  
  //setText("new Text");
    return (
      <>
      <div className= "container" style={{color:props.mode==='dark'?'white':'black'}}>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={Text} onChange={handleOnChange}  rows="8" style={{backgroundColor:props.mode==='dark'?'#144f89':'white', color: props.mode==='dark'?'white':'black'}}></textarea>

 <label htmlFor="exampleFormControlTextarea1" className="form-label"><h3>OR</h3></label>
 <div>
 <input type="file" className="btn btn-primary my-1" accept="text/plain" onChange = {readTxt}/>
 </div>
 </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLpClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClrClick}>Clear </button>
        <button className="btn btn-primary mx-1" onClick={handleTextToSpeech}>Speech</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary mx-1" onClick={ handle_1stChar_Click}>Capitalize word after full stop</button>
        {/* <button className="btn btn-primary mx-1" onClick={binclick}>binary</button> */}
        <div>
{/* <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"  value ={Text} onChange={handleOnChange} onMouseEnter={changeCase}></textarea> */}
</div>
        </div>
        <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
          <h2> Your Text Summary</h2>
          <p>{Text === " " ? '0': Text.trim().split(/\s+/).length}words and {Text.length}characters </p>
          <p>{ 0.08* Text.split(" ").length}Minutes to read</p>
         
          <h2>Preview Here</h2>
          <p>{Text.length>0?Text:"Enter something in the above textbox to preview here"}</p>


        </div>
        </>
    )
    
}
