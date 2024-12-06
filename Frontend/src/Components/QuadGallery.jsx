import Assets from "../AssetsExport"
export function QuadGallery({}) {
    const data = [
      {
        imageLink:
          Assets.VytoFlowSpecialGuest,
      },
      {
        imageLink:
        Assets.Specialguest,
      },
      {
        imageLink:
        Assets.SpecialGuestPerformance,
      },
      {
        imageLink:
        Assets.Vytfolowteaminground,
      },
    ];
   
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 my-10 ">
        {data.map(({ imageLink }, index) => (
          <div key={index} className="max-w-fit">
            <img
              className="h-48  md:max-w-[360px] rounded-lg object-cover object-center md:h-60"
              src={imageLink}
              alt=""
            />
          </div>
        ))}
      </div>
    );
  }