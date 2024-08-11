
import axios from "axios";
import { useState,useEffect } from "react";



const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`

//here above tag is unknown for the start to solve we can put it in the below function or can chanege the tag equation below
   

const useGif = (tag) => {
 
    const [gif, setGif] = useState("");
    const [loading, setloading] = useState("false");
    //const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`

  
    
    
async function fetchData(tag){
    setloading(true)

    
    // direct gathered the data from the response
     const {data} = await axios.get(tag ? `${url}&${tag}`  : url);

     const imageSource = data.data.images.downsized_large.url;

     setGif(imageSource)

    setloading(false)
    

}


useEffect(() => {fetchData("car");},[])


return{
    gif,
    loading,
    fetchData
}

}

export default useGif;