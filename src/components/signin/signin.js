import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaEye from 'react-icons/lib/fa/eye';
import FaEyeSlash from 'react-icons/lib/fa/eye-slash';
import Transition from 'react-motion-ui-pack';
import './signin.css';

class Signin extends Component {

  state = {
    type: 'password',
  }

  showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input'
    })  
  }

  render() { 
    return (
      <Transition
      component={false}
      measure={false}
      enter={{
        opacity: 1,
        translateX: 0
      }}
      leave={{
        opacity: 0,
        translateX: 1000,
      }}
    >
       <div key="signin" className="signin-section">
           <div className="signin-form">
             <div className="logo-heading">
               <img className="logo" src={require('../../images/logo.jpg')} alt="logo"/>
               <span className="logo-span">cointec</span>
             </div> 
             <form className="form">
                 <span className="form-span">Email</span>
                 <input className="form-input" placeholder="abc@gmail.com" required />
                 <span className="password">Password</span>
                 <input className="form-input" type={this.state.type} placeholder="* * * * * *" required/>
                 {this.state.type === 'password'? <FaEye className="eye" onClick={this.showHide} /> :
                 <FaEyeSlash className="eye" onClick={this.showHide} />}
                 <Link className="link-tag" to='/reset'>
                 <span className="forgot">Forgot password?</span>
                 </Link>
                 <button className="signin-button">Sign in</button>
             </form>
           </div>
           <div className="signin-greetings">
             <div className="register-heading">
               <span className="register">Not registered?</span>
               <Link className="link-tag" to='/signup'>
               <span className="create">Create an account</span>
               </Link >
               <FaArrowRight className="arrow"/>
             </div> 
             <div className="greetings">
             <h1 className="welcome-heading">Welcome Back!</h1>
             <p className="greeting-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             </div>
           </div>
       </div>
       </Transition>
);
  }
}
 
export default Signin;