import React from 'react'

const Hero = () => {
  const [formData, setFormData] = React.useState({
    topText: "",
    bottomText: "",
    // randomImage: "http://i.imgflip.com/1bij.jpg"
// randomImage:""
  });
  const [allMeme, setAllMeme] = React.useState([]);
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      

      .then(res => res.json())
      .then(data => setAllMeme(data.data.meme))
    
  }, [])
  const [memeImage , setMemeImage] = React.useState([]);

  const handleChange = (e) => {
 
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState, [name]: value
    }))
  }
  function getMemeImage() {
    const randomNum = Math.floor(Math.random() * allMeme.length);
    
    setMemeImage(allMeme[randomNum].url);

  }
  return (
    <>  
    <div>
    <div className="grid grid-cols-6 gap-4 ">
    <input type="text" name="topText" className="col-start-1 col-end-3 my-8 mx-12  border-2 h-12 border-black " placeholder="Top text" onChange={handleChange} value={formData.topText} />
    <input type="text" name="bottomText" className="col-end-7 col-span-2 my-8 mx-12 border-2 h-12 border-black" placeholder="Bottom text" onChange={handleChange} value={formData.bottomText} />
    <button onClick={getMemeImage} type="submit" className="   col-start-1 col-end-7 w-64 h-12 hover:font-bold bg-red text-black hover:text-white hover:bg-black my-8 mx-auto border rounded ">Click me to get image</button>
  </div>

  <div className=' flex flex-col align-middle justify-center'>
    <img src={memeImage} className='mx-auto' />
    {/* hi some comment */}
    <h2>{formData.topText}</h2>
    <h2>{formData.bottomText}</h2>
    <h2>hiii</h2>
  </div> 
  </div>
  </>

  )
}

export default Hero;
