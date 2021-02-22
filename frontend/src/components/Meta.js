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
      <meta name='author' content='Steven Schaner' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='ProShop' />
      <meta
        property='og:description'
        content='We sell the best products for cheap.'
      />
      <meta
        property='og:image'
        content='https://schanerproshopapp.herokuapp.com/images/proshop-app-screenshot.png'
      />
      <meta
        property='og:image:secure_url'
        content='https://schanerproshopapp.herokuapp.com/images/proshop-app-screenshot.png'
      />
      <meta property='og:image:width' content='1910' />
      <meta property='og:image:height' content='901' />
      <meta
        property='og:image:alt'
        content='Screenshot of the ProShop home page'
      />
      <meta
        property='og:url'
        content='https://schanerproshopapp.herokuapp.com/'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:site_name' content='ProShop' />
      <meta name='twitter:image:alt' content='ProShop' />
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
