import React from 'react'
import Banner from '../../../Banner/Banner';

const Broder = () => {
    const breadcrumb = [{ name: "Home", link: "/", active: true }];
  return (
    <div>
      <Banner
        title="Broader & Deabeaker"
        image="https://www.saikrishnapoultry.co.in/img/slider.png"
        breadcrumbItems={breadcrumb}
      />
    </div>
  );
}

export default Broder


