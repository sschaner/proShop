import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({
  title,
  description,
  keywords,
  productTitle,
  author,
  ogImage,
}) => {
  return (
    <Helmet>
      <title>
        {title} {productTitle}
      </title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
      <meta name='author' content={author} />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title} />
      <meta property='og:image:secure_url' content={ogImageSecure} />
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
  description:
    'We sell the best products for cheap. This is a fake eCommerce site. Nothing here is really for sale. This is a MERN eCommerce project.',
  keywords: 'electronics, buy electronics, cheap electronics',
  author: 'Steve Schaner',
  ogImage:
    'https://schanerproshopapp.herokuapp.com/images/proshop-app-screenshot.png',
  ogImageSecure:
    'https://schanerproshopapp.herokuapp.com/images/proshop-app-screenshot.png',
  productTitle: '',
};

export default Meta;
