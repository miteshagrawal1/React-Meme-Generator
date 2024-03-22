import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [url, seturl] = useState("")
  const handleclick = async ()=>{
    let res = await axios.get("https://api.memegen.link/images/");
    let index = Math.floor(Math.random() * res.data.length)
    console.log(index)
    seturl(res.data[index].url)
  }

  useEffect(()=>{
    handleclick()
  },[])

  return (
    <>
      <div className="container">
        <div className="box">
          <img src={url} alt="" />
          <button onClick={handleclick}>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
