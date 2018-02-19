import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM, { render } from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import { $ } from 'meteor/jquery';
import { Modal, ModalHeader, ModalTitle, ModalClose, ModalBody, ModalFooter } from 'react-modal-bootstrap';


export default class Home extends Component {
  state = {
    isOpen: false
  };

  openModal = () => {
    this.setState({
      isOpen: true
    });
  };

  hideModal = () => {
    this.setState({
      isOpen: false
    });
  };

  GoTologinPage = () => {
    FlowRouter.go('login');
  };

  componentDidMount() {


  }


  componentWillMount() {

  }


  render() {

    return (
      <div className="content-box" >
        <section className="section section-hero">
          <div className="hero-box">
            <div className="container">
              <div className="hero-text align-center">
                <h1>Welcome to Arabesque...</h1>
                <p>Arabesque<sup><small>TM</small></sup> is a social networking site designed specifically for bussiness, professional services, and local communities.<br /> The goal of the site is to allow registered members to establish networks of people they know and trust.</p>
              </div>

              <form className="destinations-form align-center">
                <div className="input-line">
                  <button type="button" onClick={this.openModal} name="destination-submit" className="lbutton">Login</button>
                  <button type="button" onClick={this.openModal} name="destination-submit" className="lbutton">Register</button>
                </div>
              </form>
            </div>
          </div>


          <div className="container paddBottom100 align-center">

            <img src="/images/Arabesque-Wall.png" />

          </div>
          {/* <div className="container-fluid paddBottom100 Bimage align-center">
            <h2 className="BimageOverText" >Are You Looking For...</h2>
            <img className="paddBottom100" src="/images/Are-You-Looking-for-Banner.jpg" />

          </div> */}

          <div className="container-fluid backimageAYLF">
            <div className="container paddBottom100 hight500 align-center">
              <h2 className=" paddBottom100 " >Are You Looking For...</h2>
              <div className="row">
                <div className="col-md-3 align-center" >
                  <img src="/images/Exchange_Icon.png" />
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/Group_Icon.png" />
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/People_Icon.png" />
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/Calendar_Icon.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="container paddBottom100 paddTop100 align-center">
            <div className="row">
              <div className="col-md-6">
                <div className="pull-right justfyCont">
                  <h2 className="boldblue noMargin" >Save Time, Save Money</h2>
                  <h3  className="lightblue" >Grow & Succeed</h3>
                  <p className="boldblue noMargin">We need to build a social network belongs to the</p>
                  <p className="boldblue noMargin">local societies. We need local societies to deal</p>
                  <p className="boldblue">with social networking in a healthy way.</p>
                  <button className="btn pinkbtn">More &gt;</button>
                </div>
              </div>
              <div className="col-md-6">
                <img  className="pull-left" height="80%" width="80%" src="/images/Goal.png" />
              </div>
            </div>
          </div>
          
          <div className="container-fluid backimageHIW">
            <div className="container paddBottom100 align-center">
              <h2 className=" paddBottom100 " >How it Works ?</h2>
              <div className="row">
                <div className="col-md-3 align-center" >
                  <img src="/images/Process-1.png" />
                  <h4>Create An Account</h4>
                  <p className="lightblue"  >The goal of the site is to allow registered members to establish networks of people they know and trust.</p>
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/Process-2.png" />
                  <h4>Create An Account</h4>
                  <p className="lightblue"  >The goal of the site is to allow registered members to establish networks of people they know and trust.</p>
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/Process-3.png" />
                  <h4>Create An Account</h4>
                  <p className="lightblue"  >The goal of the site is to allow registered members to establish networks of people they know and trust.</p>
                </div>
                <div className="col-md-3 align-center" >
                  <img src="/images/Process-4.png" />
                  <h4>Create An Account</h4>
                  <p className="lightblue"  >The goal of the site is to allow registered members to establish networks of people they know and trust.</p>
                </div>
              </div>
            </div>
          </div>

           <div className="container paddTop100 align-center">
            <div className="row">
                  <div className="col-md-6 align-center" >
                      <img src="/images/Mobile-App.png" />
                  </div>
                  <div className="col-md-6 paddTop150" >
                    <h3><b>Download Application & More Features</b></h3>
                    <p className="lightblue"  >The goal of the site is to allow registered members to establish networks of people they know and trust.</p> 
                    <div className="input-line align-center">
                      <div className=" col-md-offset-6 col-md-3">
                        <button className="btn btn-blue">PLAY STORE</button>
                      </div>
                    <div className="col-md-3">
                      <button className="btn btn-black">APP STORE</button>
                    </div>
                  </div>
                  </div>
            </div>
           </div>
        </section>
        <Modal isOpen={this.state.isOpen} size='modal-lg' onRequestHide={this.hideModal}>
          <ModalHeader>
            <ModalTitle>Modal title</ModalTitle>
            <ModalClose onClick={this.hideModal} />

          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-md-12" style="border-right: 1px dotted #C2C2C2;padding-right: 30px;">
                <div className="tab-content">
                  <div className="tab-pane active" id="Login">
                    <form role="form" className="form-horizontal">
                      <div className="form-group">
                        <label for="email" className="col-sm-2 control-label">
                          Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="email1" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="exampleInputPassword1" className="col-sm-2 control-label">
                          Password</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="exampleInputPassword1" placeholder="Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-sm-2">
                        </div>
                        <div className="col-sm-10">
                          <button onClick={this.GoTologinPage} className="btn btn-primary btn-sm">
                            Submit</button>
                          <a href="/login">Forgot your password?</a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </ModalBody>
          {/* <ModalFooter>
            <button className='btn btn-primary'>
              Save changes
                </button>
          </ModalFooter> */}
        </Modal>
      </div>

    )
  }

}
