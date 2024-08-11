//import axios from "axios";
import React from "react";
import Spinner from "./Spinner";
import useGif from "../hook/useGif";

// anything in the enviromental variable(.env file) is called or accessed using the process.env object
//const API_KEY = process.env.REACT_APP_GIPHY_API_KEY


const Random = () => {
    // console.log(API_KEY);

//      const [gif, setGif] = useState("");
//      const [loading, setloading] = useState("false");
    
    
//  async function fetchData(){
//    setloading(true)
    
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
//     //direct gathered the data from the response
//     const {data} = await axios.get(url);

//     const imageSource = data.data.images.downsized_large.url;

//      setGif(imageSource)

//  setloading(false)
    

// }


// useEffect(() => {
// fetchData();
// },[])

// //calling all data with the use of custom made hook

const {gif,loading,fetchData} = useGif();


    return (
        <div className="w-1/2 h-auto bg-indigo-400 gap-y-5 mt-[50px] rounded-xl border border-black flex flex-col
        items-center  
        ">
            <h1 className="mt-[15px] text-3xl  font-bold  uppercase">
            A Random Gifs
            </h1>
          
         
         
         {
            loading ?

            (<Spinner/>):

            (<img src={gif} alt="GIF" width="450" height="500"/>)

        }





            
            <button
            className="w-[60%] bg-yellow-200 text-xl font-bold py-2 rounded-lg mb-[20px]"
            onClick={() => fetchData()}
            >Generate</button>

        </div>
    )
}

export default Random;