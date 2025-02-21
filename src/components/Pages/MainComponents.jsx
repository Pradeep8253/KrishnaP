import React from "react";

const FactoryLocation = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <h3 className="text-red-600 text-left text-xl font-semibold">
        Factory Locations
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Hyderabad</h3>
          <p className="mt-2 text-gray-700">
            Industrial Park Kondapur, Kondapur Village, Medak Dist – 502 336,
            Telangana.
          </p>
          <p className="mt-2 flex items-center">
            📞 9246659508, Tel: 8897911508
          </p>
          <p className="mt-2 flex items-center">
            ✉️ info@saikrishnapoultry.com
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Karimnagar</h3>
          <p className="mt-2 text-gray-700">
            Behind Petrol Bunk, Padmanagar, Karimnagar – 505002, Telangana.
          </p>
          <p className="mt-2 flex items-center">📞 9440406200, 9849059508</p>
        </div>
      </div>
    </div>
  );
};

const SalesDepot = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <h3 className="text-red-600 text-left text-xl font-semibold">
        Sales Depot
      </h3>
      <div className="mt-4 p-4 border rounded-lg shadow-md">
        <h3 className="text-lg font-semibold">Hyderabad</h3>
        <p className="mt-2 text-gray-700">
          Plot No: 16, Road Number: 2, Mamatanagar Colony, Nagole, Hyderabad –
          68
        </p>
        <p className="mt-2 flex items-center">📞 9246659508, Tel: 8897911508</p>
        <p className="mt-2 flex items-center">✉️ info@saikrishnapoultry.com</p>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="container mx-auto mt-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">
            Poultry Equipments Manufacturers
          </h3>
          <p className="mt-2">
            <b>Factory:</b> Industrial Park Kondapur, Medak Dist – 502 336,
            Telangana.
          </p>
          <p className="mt-2">
            <b>Mobile:</b> 9246659508, Tel: 8897911508
          </p>
          <p className="mt-2">
            <b>Email:</b> info@saikrishnapoultry.com
          </p>
        </div>
        <div className="p-4 border rounded-lg shadow-md">
          <iframe
            className="w-full h-72 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15503130.135087622!2d79.097002!3d18.440857!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bccdfd080c233b3%3A0xdffdfa7ea808c2b6!2sSai%20krishna%20poultry%20equipments!5e0!3m2!1sen!2sin!4v1731589962581!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const MainComponent = () => {
  return (
    <>
      <Contact />
      <FactoryLocation />
      <SalesDepot />
    </>
  );
};

export default MainComponent;
