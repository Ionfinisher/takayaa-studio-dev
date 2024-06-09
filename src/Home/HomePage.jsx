// Suggested code may be subject to a license. Learn more: ~LicenseLog:491628413.
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <p>This is the homepage.</p>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default HomePage;
