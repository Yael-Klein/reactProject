import React, {  useContext } from "react"
import AppContext from "../context";
const  FlickerImage = ()=>{
    const context = useContext(AppContext);
  

    return <div style={{marginTop:250, marginLeft:500}}>
      
        <img src={context.photo.url_s}></img>
    </div>
}
export default FlickerImage