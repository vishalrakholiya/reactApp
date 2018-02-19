import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import ReactDOM, {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';



export class Login extends Component {
  constructor(props) {
    super(props);
    self = this;
  
}

    render() {


        return (
            <div>
                <h2>login</h2>
            </div>
        )
    }

}
export default Login;
