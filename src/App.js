
import { react, useState, useEffect } from 'react';
import './App.css';
import troll from './logo.png';
function App() {
  const [formData, setFormData] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  const [allMemes, setAllMemes] = useState([])

  // const handleClick = ()=>{
  //   // console.log(formData);
  //   console.log("hii");
  // }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      // const data = await res.json();

      .then(res => res.json())
      .then(data => setAllMemes(data.data.formData))

  }, [])
  function getMemeImage() {
    // const allMemes = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    setFormData(prevMeme => ({
      ...prevMeme, randomImage: url
    }))

  }
  const handleChange = (event) => {
    // const name = prevFormData.target.name;
    // const value = prevState.target.value;
    const { name, value } = event.target
    setFormData(prevFormData => ({
      ...prevFormData, [name]: value
    }))
  }
  return (

    <main>
      <div className="bg-violet-800  h-24 flex   px-12 ">
        <img src={troll} className=" w-16 h-12 mx-7 my-4"></img>
        <h1 className="color-black my-6 font-bold  text-white text-2xl">Meme Generator</h1>


      </div>
      <form className="grid grid-cols-6 gap-4 ">
        <input type="text" name="topText" className="col-start-1 col-end-3 my-8 mx-12  border-2 h-12 border-black " placeholder="Top text" onChange={handleChange} value={formData.topText} />
        <input type="text" name="bottomText" className="col-end-7 col-span-2 my-8 mx-12 border-2 h-12 border-black" placeholder="Bottom text" onChange={handleChange} value={formData.bottomText} />
        <button onClick={getMemeImage} type="submit" className="   col-start-1 col-end-7 w-64 h-12 hover:font-bold bg-red text-black hover:text-white hover:bg-black my-8 mx-auto border rounded ">Click me to get image</button>
      </form>

      <div className='  flex flex-col align-middle justify-center'>
        <img src={formData.randomImage} className='mx-auto' />
        {/* hi some comment */}
        <h2>{formData.topText}</h2>
        <h2>{formData.bottomText}</h2>
      </div>


    </main>

  );
}

export default App;
