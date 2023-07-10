// import logo from './logo.svg';
import {react , useState , useEffect} from 'react';
import logo from './logo.png'
import './App.css';
import troll from './logo.png';
function App() {
  const [formData , setFormData] = useState({
        topText:'',
        bottomText:''
  });
  const handleChange =(prevState) =>{
    const name = prevState.target.name;
    const value = prevState.target.value;
      setFormData({...prevState , [name]:value})
    }
  
  return (

<main>
        <div className="bg-violet-800  h-24 flex   px-12 ">
        <img src={troll} className=" w-16 h-12 mx-7 my-4"></img>
          <h1 className="color-black my-6 font-bold  text-white text-2xl">Meme Generator</h1>
            
        
        </div>
<form className="grid grid-cols-6 gap-4 ">
    <input  type="text" name="top" className="col-start-1 col-end-3 my-8 mx-12" placeholder="Top text" onChange={handleChange}  value={formData.top}/>
  <input  type="text" name="bottom" className="col-end-7 col-span-2 my-8 mx-12 " placeholder="Bottom text" onChange={handleChange} value={formData.bottom}/>
  <button onClick={handleClick}  type="submit" className="   col-start-1 col-end-7 w-64 h-12 hover:font-bold bg-red text-black hover:text-white hover:bg-black my-8 mx-auto border rounded ">Click me to get image</button>
</form>
<div><img src={empty} alt="" onClick={favourite}/>
</div>
        </main>

  );
}

export default App;
