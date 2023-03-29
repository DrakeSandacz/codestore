import React, { Component } from 'react';
import '../../css/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import {SkyLightStateless} from 'react-skylight';

import {inject, observer} from 'mobx-react';

const windowWidth = window.innerWidth;


@inject('AuthStore')
@observer
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            width: windowWidth,
        }
    }

    componentDidMount(){
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const {AuthStore} = this.props;

        var loginDialogStyles={
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',

            width: '50%',
            height: '400px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-200px',
            marginLeft: '-25%',
            backgroundColor: '#fff',
            borderRadius: '2px',
            zIndex: 100,
            padding: '15px',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
        };

        var mobileLoginDialogStyles= {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',

            width: '87%',
            height: '400px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-200px',
            marginLeft: '-47%',
            backgroundColor: '#fff',
            borderRadius: '2px',
            zIndex: 100,
            padding: '15px',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'


        };





        return (
            <SkyLightStateless
                isVisible={AuthStore.loginVisible}
                onOverlayClicked={AuthStore.toggleLoginClosed}
                onCloseClicked={AuthStore.toggleLoginClosed}
                dialogStyles={this.state.width <= 600 ? mobileLoginDialogStyles : loginDialogStyles}
            >


                <h1>Login</h1>

                <div className="emailInputContainer">
                    <input
                        id="emailEntry"
                        type="email"
                        name="email"
                        className="loginInput"
                        value={AuthStore.email}
                        onChange={(event) => AuthStore.setEmail(event)}
                        placeholder="Email"
                    />
                </div>

                <div className="passwordInputContainer">
                    <input
                        id="emailEntry"
                        type="password"
                        name="password"
                        className="loginInput"
                        value={AuthStore.password}
                        onChange={(event) => AuthStore.setPassword(event)}
                        placeholder="Password"
                    />
                </div>

                <div className="logInButtonContainer">
                    <div onClick={AuthStore.handleSignIn} className="logInButton">
                        <p>Log In</p>
                    </div>
                </div>

                <div className="forgotPasswordContainer">
                    <p onClick={AuthStore.showForgotPassword} className="createAccountText">Forgot Password?</p>
                    <br/>
                    <p onClick={AuthStore.showCreateAccount} className="createAccountText">Create Account</p>
                </div>



            </SkyLightStateless>

        );
    }
} export default LoginComponent;

