import React from 'react'

function SingleGallery({src}) {
  return (
    <div>
<img src={src} className='max-w-[290px] xl:max-w-[700px] md:max-w-full rounded-lg' alt="" />
    </div>
  )
}

export default SingleGallery