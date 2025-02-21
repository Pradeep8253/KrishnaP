import React from 'react';

const Testimonials = () => {
  return (
    <div className="max-w-7xl mx-auto mx-auto py-12 px-4">
      <div className="text-center">
        <h5 className="text-primary font-semibold">Testimonial</h5>
        <h1 className="text-4xl font-bold mt-2 mb-8">Our Clients Say!!!</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <i className="fa fa-quote-left text-2xl text-primary mb-4"></i>
          <p className="text-gray-700 mb-4">
            It is a good place to purchase poultry maintenance products. In
            addition, they sell good quality plastic products such as chairs,
            etc.
          </p>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="img/testimonial-1.jpg"
              alt="Nacharaju Raghavendra Rao"
            />
            <div className="ml-3">
              <h5 className="font-bold">Nacharaju Raghavendra Rao</h5>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <i className="fa fa-quote-left text-2xl text-primary mb-4"></i>
          <p className="text-gray-700 mb-4">
            Good quality products at reasonable prices. One stop for all poultry
            equipment.
          </p>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="img/testimonial-2.jpg"
              alt="Sri Vijayalakshmi"
            />
            <div className="ml-3">
              <h5 className="font-bold">Sri Vijayalakshmi</h5>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <i className="fa fa-quote-left text-2xl text-primary mb-4"></i>
          <p className="text-gray-700 mb-4">
            Best quality equipment at a reasonable price.
          </p>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="img/testimonial-3.jpg"
              alt="Laxman Reguri"
            />
            <div className="ml-3">
              <h5 className="font-bold">Laxman Reguri</h5>
            </div>
          </div>
        </div>
        <div className="bg-white border rounded-lg p-6 shadow-md">
          <i className="fa fa-quote-left text-2xl text-primary mb-4"></i>
          <p className="text-gray-700 mb-4">
            Super equipment manufacturers in Karimnagar. Good products and good
            service providers in Karimnagar. I am really very satisfied with
            their service.
          </p>
          <div className="flex items-center">
            <img
              className="w-12 h-12 rounded-full"
              src="img/testimonial-4.jpg"
              alt="Srinivas"
            />
            <div className="ml-3">
              <h5 className="font-bold">Srinivas</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;