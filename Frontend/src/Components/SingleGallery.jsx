import React from 'react'

function SingleGallery({src}) {
  return (
    <div>
<img src={src} className='max-w-[212px] md:max-w-full rounded-lg' alt="" />
    </div>
  )
}

export default SingleGallery