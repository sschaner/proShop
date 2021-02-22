import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title,
  description,
  keywords,
  productTitle,
  author,
  ogImage,
  ogImageSecure,
}) => {
  return (
    <Helmet>
      <title>
        {title} {productTitle}
      </title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to ProShop',
  description:
    'We sell the best products for cheap. This is a fake eCommerce site. Nothing here is really for sale. This is a MERN eCommerce project.',
  keywords: 'electronics, buy electronics, cheap electronics',
  productTitle: '',
};

export default Meta;
