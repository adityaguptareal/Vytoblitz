import React from 'react'
import Images from '../AssetsExport'
function EventGallery({image1,image2,image3,image4}) {

  return (
    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
  <div className="grid grid-cols-2 gap-2">
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src={image1}
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src={image2}
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src={image3}
        alt="" />
    </div>
    <div>
      <img className="object-cover object-center h-40 max-w-full rounded-lg md:h-60"
        src={image4}
        alt="" />
    </div>
  </div>
</div>
  )
}

export default EventGallery

