import React from 'react'
import Banner from '../../../Banner/Banner';

const Others = () => {
    const breadcrumb = [{ name: "Home", link: "/", active: true }];
  return (
    <div>
      <Banner
        title="Others "
        image="https://i.ytimg.com/vi/1WUnmMoYPvw/sddefault.jpg"
        breadcrumbItems={breadcrumb}
      />
    </div>
  );
}

export default Others