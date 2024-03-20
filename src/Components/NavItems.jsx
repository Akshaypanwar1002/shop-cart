import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo/logo.png';
// import { useCart } from '../context/cart-context';
const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  // const {name,age}=useCart();
  // addEventListener
  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <div >
      <header className={`header-section style-4 ${headerFixed ? 'header-fixed fadeInUp' : ''}`}>
        {/* header top start */}
        <div className={`header-top d-md-none ${socialToggle ? 'open' : ''}`}>
          <div className="container"></div>
        
        </div>

        {/* Header bottom */}
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              {/* logo */}
              <div className="logo-search-acte">
                <div className="logo">
                  <Link to={'/'}>
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
              </div>
              {/* menu area */}
              <div className="menu-area">
                <div className="menu">
                  <ul className={`lab-ul ${menuToggle?"active":""}`}>
                    <li><Link to="/">Home</Link> </li>
                    <li><Link to="/shop">Shop</Link> </li>
                    <li><Link to="/blog">Blog</Link> </li>
                    <li><Link to="/about">About</Link> </li>
                    <li><Link to="/contact">Contact</Link> </li>
                   {/* <h4>{name} and {age}</h4> */}
                  </ul>
                </div>

                {/* sign in & log in */}
                <a href="#form_container" className="lab-btn me-3 d-none d-md-block">Create Account</a>
                <Link to="/login" className='d-none d-md-block'>Log In</Link>

                {/* menu togler */}
                <div onClick={()=>setMenuToggle(!menuToggle)} className={`header-bar d-lg-none ${menuToggle?"active":""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* social toggler */}

                <div className='ellepsis-bar d-md-none' onClick={()=>setSocialToggle(!socialToggle)}>
                <i className="icofont-info-square"></i>
                </div>


              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavItems;
