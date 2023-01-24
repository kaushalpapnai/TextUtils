import React,{useState} from 'react'


export default function TextForm(props) {
    const[text,setText] = useState("")
    const toUpperCase = ()=>{
      let newtext = text.toUpperCase();
      setText(newtext)
      props.showAlert("Text converted to upper case","success")
    }

    const toLowerCase = ()=>{
      let newtext = text.toLowerCase();
      setText(newtext)
      props.showAlert("Text converted to lowercase","success")
    }
    const handleOnChange = (Event)=>{
      setText(Event.target.value)
    }



    return (
        <div className="container" style={{color : props.mode === "light" ? "black" : "white"}}>
            <div>
                <div className="mb-3 container mt-3" style={{color : props.mode === "light" ? "dark" : "light"}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" style={{backgroundColor: props.mode === "light" ? "white" : "black" ,color : props.mode === "light" ? "black" : "white" }}  value = {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2 my-2' onClick={toUpperCase}>convert to uppercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary mt-3 mx-2 my-2' onClick={toLowerCase}>convert to lowercase</button>
                </div>
            </div>
            <div className="container">
               <h2>Your text summary</h2>
               <p>{text.split(/\s+/).filter( (element)=>{return element.length !== 0}).length} words  and {text.length} characters</p>
               <p>{ text.split(" ").filter( (element)=>{return element.length !== 0}).length / 180} : minutes required to read </p>
               <h2>preview</h2>
               <p>{text.length>0 ? text : "nothing to preview"}</p>
            </div>
        </div>
    )
}

