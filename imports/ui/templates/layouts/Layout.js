import React, {Component, PropTypes} from 'react';
import {Meteor} from 'meteor/meteor';
import ReactDOM, {render} from 'react-dom';
import {createContainer} from 'meteor/react-meteor-data';



export default class Layout extends Component {


    render() {


        return (
            <div>
                 <header className="main-header">
                  <div className="container">
                      <div className="header-content">
                        <a href="index.html">
                            <img src="images/Logo.png" alt="site identity" />
                        </a>

                        <nav className="site-nav">
                            <ul className="clean-list site-links">
                              <li>
                                  <a href="#">Home</a>
                              </li>
                              <li>
                                  <a href="#">About</a>
                              </li>
                              <li>
                                  <a href="#">Services</a>
                              </li>
                              <li>
                                  <a href="#">FAQ</a>
                              </li>
                              <li>
                                  <a href="#">Contact</a>
                              </li>
                            </ul>

                            <input type="text" href="#" placeholder="Search" className="btn btn-outlined"/>
                        </nav>
                      </div>
                  </div>
                </header>

                <div className="container-fluid">
                    {this.props.content()}
                </div>

                <footer className="main-footer">
                  <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                            <div className="widget widget_links">
                              <p className="noMargin footerfont" >Copyright &copy; <span className="lightblue" >Arabesque</span>. All Right Reserved.</p>
                              <p className="noMargin footerfont" >Design and Developed with  by <span className="lightblue" >Engeniatech.pvt.ltd</span></p>
                            </div>
                        </div>


                        <div className="col-md-4">
                            <div className="widget widget_social">
                              <ul className="clean-list social-block">
                                  <li>
                                    <a href="#"><i className="icon-facebook"></i></a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="icon-twitter"></i></a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="icon-google-plus"></i></a>
                                  </li>
                                  <li>
                                    <a href="#"><i className="icon-google-plus"></i></a>
                                  </li>
                              </ul>
                            </div>
                        </div>

                       
                      </div>
                  </div>
                </footer>
            </div>
        )
    }

}
