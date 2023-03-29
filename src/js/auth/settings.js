import React, { Component } from 'react';
import '../../css/auth/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretUp } from '@fortawesome/free-solid-svg-icons'

import {inject, observer} from 'mobx-react';

@inject('AuthStore')
@observer
class SettingsComponent extends React.Component {
    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {

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

        return (

            <div className={this.props.display ? "loginComponent" : "doNotDisplay"}>

                <div className="column">
                    <span className="loginArrow"><FontAwesomeIcon color="#191919" icon={faCaretUp}/></span>

                    <input
                        id="emailEntry"
                        type="email"
                        className="loginInput"
                        value={AuthStore.email}
                        onChange={(e) => AuthStore.setEmail(e)}
                        placeholder="Lmao!"
                    />
                </div>

                <div className="column">
                    <input
                        id="emailEntry"
                        type="password"
                        className="loginInput"
                        value={AuthStore.password}
                        onChange={(e) => AuthStore.setPassword(e)}
                        placeholder="Lmao!"
                    />
                </div>


                <div className="column">
                    <div onClick={() => AuthStore.handleSignIn(AuthStore.email, AuthStore.password)} className="signInButton">
                        <p>Log In</p>
                    </div>
                </div>

                <div className="column">
                    <p className="createAccountText">PLEEEASSSEEE WOOOORK ?</p>

                    <p onClick={this.props.showRegister} className="createAccountText">FFUUUUUCCCCK</p>
                </div>
            </div>

        );
    }
} export default SettingsComponent;