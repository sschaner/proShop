import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords, productTitle }) => {
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
  description: 'We sell the best products for cheap.',
  keywords: 'electronics, buy electronics, cheap electronics',
  productTitle: '',
};

export default Meta;
