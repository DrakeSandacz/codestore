import React, { Component } from 'react';
import '../../css/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'
import {SkyLightStateless} from 'react-skylight';
import {inject, observer} from 'mobx-react';

const windowWidth = window.innerWidth;

@inject('AuthStore')
@observer
class ForgotComponent extends React.Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            width: windowWidth,

        };
    }

    componentDidMount(){
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    render() {

        const {AuthStore} = this.props;

        var forgotDialogStyles={
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

        var mobileForgotDialogStyles={
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
                isVisible={AuthStore.forgotVisible}
                onOverlayClicked={AuthStore.toggleForgotPasswordOpen}
                onCloseClicked={AuthStore.toggleForgotPasswordClosed}
                dialogStyles={this.state.width <= 600 ? mobileForgotDialogStyles : forgotDialogStyles}
            >

                <h1>Forgot Password?</h1>
                <p> Type in your email and we will send you a link to reset your password</p>
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

                <div className="logInButtonContainer">
                    <div onClick={AuthStore.changePasswordEmail} className="logInButton">
                        <p>Send!</p>
                    </div>
                </div>

                <div className="forgotPasswordContainer" onClick={AuthStore.showAlreadyRegistered}>
                    <p className="createAccountText">Don't have an account?</p>
                    <br/>
                </div>

            </SkyLightStateless>

        );
    }
} export default ForgotComponent;

