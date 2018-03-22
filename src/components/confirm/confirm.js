import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import Transition from 'react-motion-ui-pack';
import './confirm.css';

class Confirm extends Component {

  state = {
    newPassword: '',
    confirmPassword: '',
    checkPassword: null,
    checkConfirm: null,
    match: null
  }

  passwordChange = (e) => {
    this.setState({newPassword: e.target.value});
  }
  confirmChange = (e) => {
    this.setState({confirmPassword: e.target.value});
  }


  validate = () => {
    if(this.state.newPassword === '') {
      this.setState({checkPassword: false});
    }
    else {
     this.setState({checkPassword: true});
    }

    if(this.state.confirmPassword === '') {
      this.setState({checkConfirm: false});
    }
    else {
     this.setState({checkConfirm: true});
    }

    if(this.state.confirmPassword === this.state.newPassword) {
      this.setState({match: true});
    }
    else {
     this.setState({match: false});
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
       <div key="confirm" className="confirm-section">
           <div className="confirm-form">
             <div className="logo-heading">
               <img className="logo" src={require('../../images/logo.jpg')} alt="logo"/>
               <span className="logo-span">cointec</span>
             </div> 
             <form className="form">
                <span className="form-span">New password</span>
                 <input className="form-input" onChange={this.passwordChange} placeholder="abc@gmail.com" />
                 {this.state.checkPassword === false ? <span className="email-validate">please enter new password</span>: ''}
                 <span className="password">Confirm password</span>
                 <input className="form-input"  onChange={this.confirmChange} placeholder="* * * * * *" />
                 {this.state.checkConfirm === false ? <span className="email-validate">please enter confirm password</span>: ''}
                 {this.state.match === false ? <span className="email-validate">new password doesn't match with confirm password</span>: ''}
                 <button className="signin-button"  onClick={this.validate}>Confirm</button>
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
             <h1 className="welcome-heading">Welcome back.</h1>
             <p className="greeting-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
             </div>
           </div>
       </div>
       </ Transition>
);
  }
}
 
export default Confirm;