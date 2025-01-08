import React from 'react';

function Stats() {
  return (
    <div
      className="mx-auto p-4 border-[1px] border-white text-white flex flex-wrap  gap-4 sm:gap-8 rounded-lg flex-col MobileM:flex-row"
      style={{
        background: 'linear-gradient(90deg, hsla(275, 100%, 50%, 1) 0%, hsla(207, 68%, 50%, 1) 100%)',
      }}
    >
      {/* Registration Stats */}
      <div id="Stats1" className=" border-r-0 MobileM:border-r-2 border-white pr-3 flex flex-col items-center sm:items-start">
        <h1 className="font-Orbitron text-lg sm:text-xl font-bold">1000+</h1>
        <div className="font-Montserrat text-sm sm:text-base">Registrations</div>
      </div>

      {/* Events Stats */}
      <div id="Stats2" className=" border-r-0 MobileM:border-r-2 border-white pr-3 flex flex-col items-center sm:items-start">
        <h1 className="font-Orbitron text-lg sm:text-xl font-bold">5+</h1>
        <div className="font-Montserrat text-sm sm:text-base">Events</div>
      </div>

      {/* Volunteers Stats */}
      <div id="Stats3" className="pr-3 flex flex-col items-center sm:items-start">
        <h1 className="font-Orbitron text-lg sm:text-xl font-bold">70+</h1>
        <div className="font-Montserrat text-sm sm:text-base">Volunteers</div>
      </div>
    </div>
  );
}

export default Stats;
