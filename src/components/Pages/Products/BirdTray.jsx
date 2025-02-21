import React from 'react'
import Banner from '../../../Banner/Banner';

const BirdTray = () => {
    const breadcrumb = [{ name: "Home", link: "/", active: true }];
  return (
    <div>
      <Banner
        title="Bird Tray"
        image="https://www.housedigest.com/img/gallery/the-bird-feeder-innovation-that-will-keep-bully-birds-from-eating-all-the-food/intro-1693802890.jpg"
        breadcrumbItems={breadcrumb}
      />
    </div>
  );
}

export default BirdTray

