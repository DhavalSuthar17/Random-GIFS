//import axios from "axios";
import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hook/useGif";

// anything in the enviromental variable(.env file) is called or accessed using the process.env object
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
    const [tag, setTag] = useState("");

//     const [gif, setGif] = useState("");


//     const [loading, setloading] = useState("false");
   
    
    
// async function fetchData(){
//     setloading(true)
    
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
//     //direct gathered the data from the response
//     // const {data} = await axios.get(url);

//     //  const imageSource = data.data.images.downsized_large.url;

//     //  setGif(imageSource)

//     // setloading(false)
    

// }


// useEffect(() => {fetchData();},[])

// function clickHandler(){ fetchData() }

// function changeHandler(event){ setTag(event.target.value) }


//getting all data from useGif custom made hook
    

 const {gif,loading,fetchData} = useGif(tag)

return (
        <div className="w-1/2 h-auto bg-red-700 gap-y-5 mt-[90px] rounded-xl border border-black flex flex-col
        items-center  mb-20
        ">
            <h1 className="mt-[15px] text-3xl  font-bold  uppercase">
           Random {tag} Gifs
            </h1>
          
         
         
         {
            loading ?

            (<Spinner/>):

            (<img src={gif} alt="GIF" width="450" height="400"/>)

        }



        <input
        className="w-[60%] bg-white text-xl font-bold py-2 rounded-lg mb-[10px] text-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
          
        />
        
        <button
            className="w-[60%] bg-yellow-200 text-xl font-bold py-2 rounded-lg mb-[20px]"
            onClick={() => fetchData(tag)}
        >
            Generate
        </button>

        </div>
    )
}

export default Tag;