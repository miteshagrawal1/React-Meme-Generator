import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [url, seturl] = useState("")
  const [errormsg, seterrormsg] = useState("")
  const handleclick = async () => {
    try {
      let res = await axios.get("https://api.memegen.link/images/");
      let index = Math.floor(Math.random() * res.data.length)
      console.log(index)
      seturl(res.data[index].url)
    } catch (error) {
      seterrormsg(error.message)
    }
  }

  useEffect(() => {
    handleclick()
  }, [])

  return (
    <>
      <div className="container">
        <div className="box">
          <img src={url} alt="" />
          <p>{errormsg !== "" && <h2>{errormsg}</h2>}</p>
          <button onClick={handleclick}>Generate</button>
        </div>
      </div>
    </>
  )
}

export default App
