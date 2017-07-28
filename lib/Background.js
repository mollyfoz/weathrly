import React from 'react';

export default function Background(props)  {
  return (
    <div>
      <section className='background-video-container'>
        <video poster="assets/sky-background.mp4" className='background-video' id="bgvid" playsInline autoPlay muted loop>
          <source src="assets/sky-background.mp4" type="video/webm"/>
          <source src="assets/sky-background.mp4" type="video/mp4"/>
        </video>
        <audio className='thunder-audio' autoPlay>
          <source src='assets/thunder2.wav' autoPlay/>
        </audio>
      </section>
      <section className='background-video-container2'>
        <video poster="assets/sky-background.mp4" className='background-video' id="bgvid" playsInline autoPlay muted loop>
          <source src="assets/sky-background.mp4" type="video/webm"/>
          <source src="assets/sky-background.mp4" type="video/mp4"/>
        </video>
      </section>
      <section className='background-video-container3'>
        <video poster="assets/sky-background.mp4" className='background-video' id="bgvid" playsInline autoPlay muted loop>
          <source src="assets/sky-background.mp4" type="video/webm"/>
          <source src="assets/sky-background.mp4" type="video/mp4"/>
        </video>
      </section>
    </div>
  )
}
