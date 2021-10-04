import React, {useState} from 'react'

export default function Question(props) {
const [i, setInput] = useState('')
    const ok=()=>{
   if(i==props.location.state.detail[0].VerificationAnswer)
   document.getElementById("p").innerText="goodLuck"
else
document.getElementById("p").innerText="ouu... no!!"
 }
    return (
        
        <div>
            
            <p>שאלת אימות:</p>
            <p>{props.location.state.detail[0].VerificationQuestion}</p><br />
    הכנס/י את תשובתך:<input onChange={event => setInput(event.target.value)} />
    <button value="OK" onClick={ok}>OK</button>
    <p id="p"></p>
        </div>
    )
}