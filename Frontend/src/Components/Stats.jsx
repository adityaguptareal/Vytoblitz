import React from 'react';

function Stats() {
  return (
    <div
      className="max-w-fit p-4 border-[1px]  border-white text-white flex gap-8 rounded-lg"
      style={{
        background: 'linear-gradient(90deg, hsla(275, 100%, 50%, 1) 0%, hsla(207, 68%, 50%, 1) 100%)',
      }}
    >
      {/* Registration Stats */}
      <div id="Stats1" className="border-r-2 border-white pr-3 max-w-fit">
        <h1 className="font-Orbitron text-xl font-bold">1000+</h1>
        <div className="font-Montserrat">Registrations</div>
      </div>
      
      {/* Events Stats */}
      <div id="Stats2" className="border-r-2 border-white pr-3 max-w-fit">
        <h1 className="font-Orbitron text-xl font-bold">5+</h1>
        <div className="font-Montserrat">Events</div>
      </div>
      
      {/* Volunteers Stats */}
      <div id="Stats3" className="pr-3 max-w-fit">
        <h1 className="font-Orbitron text-xl font-bold">30+</h1>
        <div className="font-Montserrat">Volunteers</div>
      </div>
    </div>
  );
}

export default Stats;
