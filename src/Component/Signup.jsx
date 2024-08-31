import React from 'react';
import '../Styled/Login.css';
import Logo from "/Logo.png";
import { EnvelopeSimple, Eye, Lock } from '@phosphor-icons/react';
import { Link} from 'react-router-dom'

const Signup = () => {
  return (
    <div className='logo_part'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="login-container">
        <h2 >Login to your account</h2>
        <div className="fieldcontainer">
          <EnvelopeSimple size={20} color='#fff' />
          <div className='divider'></div>
          <input type="text" placeholder='Email Address' />
        </div>
        <div className="fieldcontainer">
          <div className="password-field">
            <Lock size={20} color='#fff' />
            <div className='divider'></div>
            <input type="password" placeholder='Enter password' />
          </div>
          <div className="lock">
            <Eye size={20} color='#fff' />
          </div>
        </div>
        <h5>Forget Password?</h5>
      </div>
      <div className="center">
        <h4>Already have an account ? <Link to='/login'>Sign In</Link></h4>
      </div>
    </div>
  );
}

export default Signup;