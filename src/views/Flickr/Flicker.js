import React, { useState, useContext, useEffect } from "react"
import { useHistory } from "react-router";
import AppContext from "../../context";

const Photo = ({photo})=>{
    const context = useContext(AppContext);
    const history=useHistory();
   const p =()=>{
   context.updateCurrentPhoto(photo)
   history.push('/flicker_image')
}
    return <div style={{ height: 400, width: '85%', marginLeft: 50, marginTop: 70,float:'right'}}>
        <p>ID: {photo.id}</p>
        <p>owner:{photo.owner}</p>
        <p>secret:{photo.secret}</p>
        <p>title:{photo.title}</p>
        <p></p>
       <div onClick={p} ><img src={photo.url_s}></img></div> 
    </div>
}

export default function Flicker() {

    const [state, setState] = useState({ photoList: {photo:[]}});
   
    useEffect(() => {
       get();
       
    }, [])

    const axios = require('axios');

    const get = async (e) => {
        axios.get('https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1')
            .then((res) => {
                console.log(res.data.photos);
                setState({ photoList : res.data.photos })
                     console.log(state.photoList)   
            })
            .catch((error) => {
                console.error(error)
            })
    }

    return (
        <div>

         {state.photoList.photo.map(photo=>
         <Photo photo={photo}></Photo>
         )
         }
          
        </div>
    )
}

