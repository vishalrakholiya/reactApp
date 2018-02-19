import React from 'react'
import {FlowRouter} from 'meteor/kadira:flow-router'
import {mount} from 'react-mounter'
import Layout from '/imports/ui/templates/layouts/Layout.js';
import LayoutAfter from '/imports/ui/templates/layouts/LayoutAfter.js';
import Home from '/imports/ui/templates/view/home/home.js';
import Login from '/imports/ui/templates/view/register/Login.js';



FlowRouter.route('/', {
    name: 'home',
    triggersEnter: function( context ) {
          FlowRouter.go('/');
         },
    action() {
        mount(Layout, {
            content() {
                return <Home/>
            }
        })
    }
})

FlowRouter.route('/login', {
    name: 'login',
    action() {
        mount(LayoutAfter, {
            content() {
                return <Login/>
            }
        })
    }
})




