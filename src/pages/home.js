import React from 'react';
import background from "../images/home.jpg";


const Home = () => {
  return (
    <div
      style={{
        display: 'fit',
        justifyContent: 'center',
        alignItems: 'center',
        height: '192vh',
        backgroundImage: `url(${background})`
      }}
    >
      <h1>Welcome!</h1>
    </div>
  );
};

export default Home;
