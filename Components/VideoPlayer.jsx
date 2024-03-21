import React, { useRef } from 'react'
import Video from '../video/video.mp4' 
function VideoPlayer({playState, setPlayState}) {
    const player = useRef(null)
    const closePlayer = (e)=>{
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`video__player ${playState ? '' : "hide"}`} ref={player} onClick={closePlayer}>
        <video src={Video} className='video' autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer