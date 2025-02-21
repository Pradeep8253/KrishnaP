import React from 'react'
import Banner from '../../../Banner/Banner';

const Drinker  = () => {
   const breadcrumb = [{ name: "Home", link: "/", active: true }];

  
  return (
    <Banner
      title="Drinker"
      image="https://skapoultryequipment.com/wp-content/uploads/2021/06/chicken-drinkers-drinkers-for-chickens-automatic-water-drinkers-for-chickens-broiler-drinkers-3.jpg"
      breadcrumbItems={breadcrumb}
    />
  );
}

export default Drinker 

