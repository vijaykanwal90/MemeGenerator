import React from 'react'

import { useState , useEffect} from 'react'
const NewHero = () => {
  const [allmeme , setAllmeme] = useState([]);
  const [memeImage , setMemeImage] = useState([]);
const [formData , setFormData] = useState({
  topText:'',
  bottomText:''
});
const handleChange = (event) => {
  const {name , value} = event.target
  console.log(name, value)
   setFormData((prevState)=>(
    {...prevState, [name]:value 
    }));
    
};
useEffect(()=>{

  fetch("https://api.imgflip.com/get_memes")
.then(res => res.json())
.then (data => setAllmeme(data.data.memes))
// console.log(data.name)

},[])
console.log(allmeme)
function getMemeImage(){
  const random = Math.floor(Math.random() * allmeme.length);
  setMemeImage(allmeme[random].url);
console.log("button is working fine")
}
  return (
    <>
    <div>
        <div className='flex justify-between mx-12 my-8'>
            <input type="text"  placeholder='Enter Top text' className=' border border-black h-8 w-64 ' name='topText'  value={formData.topText} onChange={handleChange}/>
            <input type="text"  placeholder='Enter Bottom text' className=' border border-black h-8 w-64' name='bottomText' value={formData.bottomText} onChange={handleChange}/>
            
        </div>
        <div className='flex justify-center'>
        <button className='border border-black rounded  text-white bg-violet-800 h-12 w-[200px]  hover:font-bold' onClick={getMemeImage}> Click To Get New Image</button>
        </div>
        <div className='flex relative justify-center mt-4 text-center'>
          <div>
          <img src={memeImage} alt=""  className='w-[40vw] h-[50vh] my-2 '/>
          
            <span className='  absolute top-0 font-bold   text-white drop-shadow-md text-[70px] left-[40%]'> {formData.topText} </span>
            <span className=' absolute bottom-0  font-bold  drop-shadow-md  left-[40%] text-white text-[70px]'>{formData.bottomText}</span>
          </div>
          
        </div>
    </div>
    </>
  )
}

export default NewHero
