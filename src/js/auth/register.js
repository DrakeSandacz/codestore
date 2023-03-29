import React, { Component } from 'react';
import '../../css/auth/register.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";
import {inject, observer} from 'mobx-react';

import {SkyLightStateless} from 'react-skylight';
const windowWidth = window.innerWidth;


@inject('AuthStore')
@observer
class RegisterComponent extends React.Component {

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

        var registerDialogStyles ={
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '50%',
            height: '475px',
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


        var mobileRegisterDialogStyles = {
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '87%',
            height: '475px',
            position: 'fixed',
            top: '40%',
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
                isVisible={AuthStore.registerVisible}
                onOverlayClicked={AuthStore.toggleRegisterOpen}
                onCloseClicked={AuthStore.toggleRegisterClosed}
                dialogStyles={this.state.width <= 600 ?  mobileRegisterDialogStyles : registerDialogStyles}
            >

                <h1>Create Account</h1>
                <p className={AuthStore.invalidEmail ? "registerErrorAlert" : "doNotDisplay"}>Email is invalid!</p>
                <p className={AuthStore.invalidPasswords ? "registerErrorAlert" : "doNotDisplay"}>Passwords do not match!</p>
                <p className={AuthStore.altErrorText ? "registerErrorAlert" : "doNotDisplay"}>{AuthStore.altErrorText}</p>

                <div className="registerEmailContainer">
                    <input
                        id="emailEntry"
                        type="email"
                        name="email"
                        className="registerInput"
                        value={AuthStore.registerEmail}
                        onChange={(event) => AuthStore.setRegisterEmail(event)}
                        placeholder="Email"
                    />
                </div>

                <div className="registerShopContainer">
                    <input
                        className="registerInput"
                        value={AuthStore.registerName}
                        onChange={(event) => AuthStore.setRegisterName(event)}
                        placeholder="Username"
                    />
                </div>

                <div className="registerPasswordContainer">
                    <input
                        type="password"
                        className="registerInput"
                        value={AuthStore.registerPassword}
                        onChange={(event) => AuthStore.setRegisterPassword(event)}
                        placeholder="Password"
                    />
                </div>

                <div className="confirmPasswordContainer">
                    <input
                        type="password"
                        className="registerInput"
                        value={AuthStore.registerPasswordConfirm}
                        onChange={(event) => AuthStore.setRegisterPasswordConfirm(event)}
                        placeholder=" Confirm Password"
                    />
                </div>

                <div className="registerButtonContainer">
                    <div onClick={AuthStore.handleRegisterUser} className="registerButton">
                        <p className="registerText"> Register </p>
                    </div>
                </div>


                <div className="alreadyRegisteredContainer" onClick={AuthStore.showAlreadyRegistered}>
                    <p className="alreadyHaveAccountText">Already Registered?</p>
                </div>


            </SkyLightStateless>
        );
    }
} export default RegisterComponent;

