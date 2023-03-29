import React, { Component } from 'react';
import './App.css';
import {Route, withRouter, HashRouter, BrowserRouter,Redirect, Router, Switch } from "react-router-dom"
import fire from './fire';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';
import {StripeProvider, Elements} from 'react-stripe-elements';
import history from './js/history' ;
import {SkyLightStateless} from 'react-skylight';

import validator from 'validator';

//components
import NavBar from './js/nav/navBar';
import LoginComponent from './js/auth/login';
import RegisterComponent from './js/auth/register';
import ForgotComponent from './js/auth/forgotPassword';
import AccountDropDown from './js/auth/accountDropDown';
import SettingsComponent from './js/auth/settings';
import CheckoutForm from './js/checkout/CheckoutForm';
import Footer from './js/footer/footer';

//Pages
import Home from './js/home/home';
import About from './js/about/about';
import Product from './js/product/productPage';
import CheckoutPage from './js/checkout/checkoutPage';
import Account from './js/account/Account';
import UploadPage from './js/upload/UploadPage';
import Settings from './js/settings/settings';

import CategoryPage from './js/category/CategoryPage';

import Profile from './js/profile/profile';

import Test from './js/test';

import Oops from './js/errorPage/Oops';

// Legal Pages
import Author from './js/author/author';
import Licensing from './js/footerPages/licensing';
import PrivacyPolicy from "./js/footerPages/privacyPolicy";
import TermsConditions from "./js/footerPages/termsConditions";

@inject('AuthStore')
@observer
class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null,
            displayAccountDropdown: false,
        };


        this.signOutUser = this.signOutUser.bind(this);

    }


    // gets all data from user template doc
    // sets user state
    getUserData = (uid) => {
        console.log('getting user data');

        firebase.firestore().collection('user').doc(uid).get()
            .then((doc) => {
                console.log('got user: ' + doc.id);
                const userObj = new Object(doc.data());
                userObj.id = doc.id;
                this.setState({user: userObj});
                // this.props.AuthStore.setUserData(userObj);
            }).catch((error) => console.log('error getting user data: ' + error));

    }

    componentDidMount(){
        this.auth = firebase.auth().onAuthStateChanged(function (user) { // start auth listener
            console.log('onAuthStateChanged App.js');
            if(user){this.getUserData(user.uid);}
        }.bind(this));
    }

    componentWillMount(){
    }

    componentWillUnmount(){
        this.auth(); // unsubscribe auth listener
    }

    // Sign out user
    // Set user state to null and close accountDropDown
    signOutUser(){
        firebase.auth().signOut().then((data) => {
            this.setState({user: null, displayAccountDropdown: false}, function () {});
        }).catch((error) => console.log('sign out error ' + error));
    }

    render() {
        const ProtectAccount = () => {
            if (!AuthStore.user) {
                return <Route component={Oops}/>
            }
            return <Route path='/account' component={Account}/>
        };


        const ProtectSettings = () => {
            if (!AuthStore.user) {
                return <Route component={Oops}/>
            }
            else {
                return <Route path='/settings' component={Settings}/>
            }
        };

        const ProtectUpload = () => {
            if(!AuthStore.user) {
                return <LoginComponent/>
            }
            else {
                return <Route path='/upload' component={UploadPage}/>
            }
        };


        const {AuthStore} = this.props;
        AuthStore.setUserData(this.state.user);
        // use local storage?

        return (

            <Router history={history}>
                <StripeProvider apiKey="pk_test_LIy0ygzrM5o3jGvRs0jcjZvC">

                    <div className="App" >
                        <NavBar
                            user={this.state.user}
                            displayLogin={this.displayLogin}
                            displayCheckout={this.displayCheckout}
                            displayAccount={() => this.setState({displayAccountDropdown: !this.state.displayAccountDropdown})}
                        />

                        <div>
                            <Switch>
                                <Route exact={true} path='/' component={Home} />
                                <Route path='/productPage/:templateId' component={Product}/>
                                <ProtectAccount path='/account' component={Account}/>
                                <ProtectUpload path='/upload' component={UploadPage}/>
                                <Route path='/category/:category/:page' component={CategoryPage}/>
                                <Route path='/test' component={Test}/>
                                <Route path='/about' component={About}/>
                                <Route path='/licensing' component={Licensing}/>
                                <Route path='/privacyPolicy' component={PrivacyPolicy}/>
                                <Route path='/termsConditions' component={TermsConditions}/>
                                <Route path='/author' component={Author} />
                                <ProtectSettings path='/settings' component={Settings}/>
                                <Route path='/profile/:userId' component={Profile}/>
                                <Route component={Oops}/>
                            </Switch>
                        </div>

                        <LoginComponent />
                        <ForgotComponent/>
                        <RegisterComponent/>

                        <Elements>
                            <CheckoutForm/>
                        </Elements>


                        <AccountDropDown
                            display={this.state.displayAccountDropdown}
                            handleModalClose={() => this.setState({displayAccountDropdown: false})}
                            handleSignout={this.signOutUser}
                        />

                        <Footer/>
                    </div>
                </StripeProvider>
            </Router>

        );
    }
}

export default App;
