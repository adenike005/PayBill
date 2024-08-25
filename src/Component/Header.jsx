import React, { useState, useEffect, useRef } from "react";
import Logo from "/Logo.png";
import "../Styled/Header.css";
import { List } from '@phosphor-icons/react';
import Button from '/button.png'
import { Link } from "react-router-dom";

function Header() {
  const headerRef = useRef(null);

  const stickyHeaderRunc = () =>{
    window.addEventListener('scroll', () =>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header')
      }else{
        headerRef.current.classList.remove('sticky_header')
      }
    })
  }

  useEffect(() =>{
   stickyHeaderRunc()
   return () => window.removeEventListener('scroll', stickyHeaderRunc)
  })

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [menuOpen]);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleBackgroundClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="section-header" ref={headerRef}>
      <div className="header">
        <img src={Logo} alt="Logo" className="logo" />
        <div 
          className={`navigation ${menuOpen ? 'active_menu' : ''}`} 
          ref={menuRef}
        >
          <ul className="menu" onClick={(e) => e.stopPropagation()}>
            <li>
              <a href="#" onClick={handleNavLinkClick}>Product</a>
            </li>
            <li>
              <a href="#" onClick={handleNavLinkClick}>About</a>
            </li>
            <li>
              <a href="#" onClick={handleNavLinkClick}>FAQ</a>
            </li>
          </ul>
        </div>

       

        {menuOpen && <div className="fixed-background" onClick={handleBackgroundClick}></div>}

         <div className="button">
          <button className="login"><Link to='/login'>Login</Link></button>
          <button className="register">Register</button>
         </div>
        <div className="mobile_menu">
          <List size={18} color="#fff" onClick={menuToggle} />
        </div>
      </div>
    </div>
  );
}

export default Header;



