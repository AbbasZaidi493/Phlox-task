import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import FaCheck from 'react-icons/lib/fa/check';
import FaClose from 'react-icons/lib/fa/close';
import Transition from 'react-motion-ui-pack';
import './signup.css';


class Signup extends Component {

    state = {
        validateEmail : '',
        lengthCheck: false,
        numberCheck: false,
        capitalCheck: false,
        passwordChange: false
    }
  
 
    validateEmail = (email) => {   
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    validate = () => {

        var email = this.textInput.value;
      if (this.validateEmail(email)) {
          this.setState({validateEmail: true});
    } else {
        this.setState({validateEmail: false});
    }
      return false;
    }

    validatePassword = () => {
       this.setState({passwordChange: true});
        var a = this.password.value;
        if(a.length >= 8)
        {
            this.setState({lengthCheck: true});
        }
         else {
          this.setState({lengthCheck: false});
        }
        var hasNumber = /\d/;
       var check1 = hasNumber.test(a);
        if(check1 === true) {
          this.setState({numberCheck: true});
        }
        else {
          this.setState({numberCheck: false});
        }
        var hasCapital = /[A-Z]/;
        var check2 = hasCapital.test(a);
        if(check2 === true) {
          this.setState({capitalCheck: true});
        }
        else {
          this.setState({capitalCheck: false});
        }

        if(this.state.lengthCheck === true && this.state.numberCheck === true && this.state.capitalCheck === true) {
          this.setState({passwordChange: false});
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
       <div key="signup" className="signup-section">
            <div className="signup-form">
             <div className="logo-heading">
               <img className="logo" src={require('../../images/logo.jpg')} alt="logo"/>
               <span className="logo-span">cointec</span>
             </div> 
             <form className="form">
                 <div style={{display: "inline-flex"}}>
                   <div>
                     <span className="form-span">First Name</span>
                     <input className="name" placeholder="John" required />
                   </div>
                   <div style={{marginLeft: '10px'}}>
                     <span className="form-span">Last Name</span>
                     <input className="name" placeholder="Adams" required/>
                   </div>
                 </div>
                 <span className="form-span" style={{marginTop:'20px'}} >Email</span>
                 <input className="form-input" ref={(input) => { this.textInput = input; }}
                 id="email" placeholder="abc@gmail.com" required/>
                 {this.state.validateEmail === false ? <span className="email-validate">please enter a valid email</span>: ''}
                 <span className="password" >Password</span>
                 <div style={{display: 'inline-flex'}}>
                 <input className="form-input" type="password" onChange={this.validatePassword} ref={(input) => { this.password = input; }} placeholder="* * * * * *" required/>
                 {this.state.passwordChange===true ?<div className="password-check">
                   <span className="contain">Password must contain</span>
                   <div style={{display: "inline-flex"}}>
                   {this.state.lengthCheck ===true? <FaCheck style={{color: 'greenyellow'}}/>: <FaClose style={{color: 'greenyellow'}}/>}
                   <span className="checks">8 or more character</span>
                   </div>
                   <div style={{display: "inline-flex"}}>
                   {this.state.capitalCheck ===true? <FaCheck style={{color: 'greenyellow'}}/> : <FaClose style={{color: 'greenyellow'}}/>}
                   <span className="checks">1 capital letter [A-Z]</span>
                   </div>
                   <div style={{display: "inline-flex"}}>
                   {this.state.numberCheck ===true? <FaCheck style={{color: 'greenyellow'}}/> : <FaClose style={{color: 'greenyellow'}} />}
                   <span className="checks">1 number [0-9]</span>
                   </div>
                </div>: ''}
                </div>
                 <button className="signin-button" onClick={this.validate} type="submit" >Create Account</button>
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
       </ Transition>
);
  }
}
 
export default Signup;