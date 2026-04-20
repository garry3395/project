import React from 'react'

const Vedio = () => {
  return (
    <>
        <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
      >
        <source src="/reetish.mp4" type="video/mp4" />
      </video>

    </>
  )
}

export default Vedio