import React from 'react';

const About = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://corporate.flipkart.net/assets/images/technology-image.png"
        alt="img"
        style={{ width: '35vw', height: '80vh' }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <h3>TECHNOLOGY AT SHOPCART</h3>
        <h4>INNOVATION</h4>
        <p style={{ width: '50vw' }}>
          <span style={{color:'#ffdf40',fontSize:'1.5rem',fontWeight:'600'}}>Shop</span><span style={{color:'#313e93',fontSize:'1.5rem',fontWeight:'600'}}>Cart</span> technology drives path-breaking, customer-focused innovation that makes high quality products
          accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and
          seamless.
        </p>
      </div>
    </div>
  );
};

export default About;
