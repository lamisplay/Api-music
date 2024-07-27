import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Music = () => {
    const navigate = useNavigate()
    const[alldata, setalldata] = useState([])
 

  useEffect(()=>{
    axios.get('https://robo-music-api.onrender.com/music/my-api')
    .then((res)=>{
      console.log(res.data);
      setalldata(res.data)
      console.log(alldata);

  }).catch((err)=>{
      console.log(err);
  })

  },[])
  const next = (ele)=>{
    console.log(ele.id);
    let id = ele.id
    navigate(`/${id}`)
  }

  return (
    
      <div className="">
      {alldata.map((el,i)=>(
        <div onClick={()=>next(el)}>
          <img src={el.songImage} alt="" />
          <h4>{el.artistName}</h4>
          <p>{el.songTitle}</p>
          <p>{el.albumName}</p>
          <p>{el.release}</p>
        </div>
      ))}
    
    </div>


  )
}

export default Music