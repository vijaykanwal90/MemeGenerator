import React from "react";
import troll from "../logo.png"
function NavBar(){
    return (
<div className="bg-violet-800  h-24 flex  ">
        <img src={troll} className=" w-16 h-12 mx-7 my-4"></img>
        <h1 className="color-black my-6 font-bold  text-white text-2xl">Meme Generator</h1>


      </div>
    )
}
export default NavBar;