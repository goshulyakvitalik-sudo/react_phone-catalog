import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div style={{ padding: 32, textAlign: 'center' }}>
      <h1>Page not found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
