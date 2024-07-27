import React,{useEffect,useState,useRef} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const Onemusic = () => {
    const {id}= useParams()
    const [Onemusic, setOnemusic] = useState({})
    const [isplaying, setisplaying] = useState(false)
    console.log(id);
    const audioref = useRef()
    console.log(audioref.current);

    useEffect(() => {
      axios.get(`https://robo-music-api.onrender.com/music/my-api/${id}`)
      .then((res)=>{
        console.log(res.data);
        setOnemusic(res.data.data[0])
      }).catch((err)=>{
        console.log(err);
      })

    }, [])

    const playaudio = ()=>{
      let music = audioref.current
      console.log(music);
     if (!isplaying) {
      music.play()
      setisplaying(true)
     }else{
      music.pause()
      setisplaying(false)
     }
    }

  //   const play = ()=>{
  //     let music = audioref.current
  //     console.log(music);
    
  //  }

    
    
  return (
    <div>
        <div>
            <audio ref={audioref} src={Onemusic.songUrl}></audio>
            <img src={Onemusic.songImage} alt="" />
            <p>{Onemusic.artistName}</p>
            <p>{Onemusic.songTitle}</p>

            <button className='btn btn-danger' onClick={()=>playaudio()}>{isplaying? <i className="fa fa-pause"></i>: <i className="fa fa-play"></i>}</button>


        </div>

    </div>
  )
}

export default Onemusic