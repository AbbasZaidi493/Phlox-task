import React, {Component} from 'react'
import { Route, Switch } from 'react-router-dom';
import Signup from '../signup/signup';
import Reset from '../resetpass/reset';
import CheckInbox from '../checkinbox/checkinbox';
import Confirm from '../confirm/confirm';



class RouteComponent extends Component {

  render() {
    return(
      <Switch>
        <Route path='/signup' exact component={Signup} />
        <Route path='/reset' exact component={Reset} />
        <Route path='/checkinbox' exact component={CheckInbox} />
        <Route path='/confirm-password' exact component={Confirm} />
      </Switch>
);
  }
}

export default RouteComponent;