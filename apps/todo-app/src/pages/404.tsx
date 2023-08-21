import Error from 'next/error';
import React from 'react';

const NotFound: React.FC = () => {
  // Opinionated: do not record an exception in Sentry for 404
  return <Error statusCode={404} />;
};

export default NotFound;
