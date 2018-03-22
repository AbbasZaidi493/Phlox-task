import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import Transition from 'react-motion-ui-pack';
import './reset.css';

class Reset extends Component {
   state = {
     email: '',
     checkEmail: null
   }

   emailChange = (e) => {
     this.setState({email: e.target.value});
   }

   validate = () => {
     if(this.state.email === '') {
       this.setState({checkEmail: false});
     }
     else {
      this.setState({checkEmail: true});
     }
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
       <div key="reset" className="reset-section">
           <div className="reset-form">
             <div className="logo-heading">
               <img className="logo" src={require('../../images/logo.jpg')} alt="logo"/>
               <span className="logo-span">cointec</span>
             </div> 
             <form className="form">
                 <p className="reset-para">Please enter email address to begin reseting your password.</p>
                 <span className="form-span">Email</span>
                 <input className="form-input" onChange={this.emailChange} placeholder="abc@gmail.com" />
                 {this.state.checkEmail === false ? <span className="email-validate">please enter an email address</span>: ''}
                 <button className="signin-button" onClick={this.validate}>Send reset email</button>
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
             <h1 className="welcome-heading">Reset password.</h1>
             <p className="greeting-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             </div>
           </div>
       </div>
       </ Transition>
);
  }
}
 
export default Reset;