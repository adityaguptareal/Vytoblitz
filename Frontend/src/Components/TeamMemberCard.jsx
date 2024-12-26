import React from 'react'
// import Images from '../AssetsExport'
function TeamMemberCard({name, img}) {
  return (
    <div class="flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg my-6 h-[250px] w-[200px]">
    <div class="m-2.5 overflow-hidden rounded-md  flex justify-center items-center">
      <img class="w-full h-full  object-cover " src={img} alt="profile-picture" />
    </div>
    <div class="p-6 text-center">
      <h4 class="mb-1 text-xl font-semibold text-slate-800">
       {name}
      </h4>

    </div>
  </div>
  )
}

export default TeamMemberCard