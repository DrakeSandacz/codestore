import React, { Component } from 'react';
import '../../css/auth/accountDropDown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";
import history from '../history';

const fader = {
    transition: 'all 1s ease-out'
};
    class AccountDropDown extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
            fade: false,
            show: false,
        };
    }
    componentDidMount(){
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }

    navigateToAccount = () => {
        history.push('/account');
    };

    navigateToUpload = () => {
        history.push('/upload');
    };

    navigateToSettings = () => {
        history.push('/settings');
    };



    render() {
        return (

            <div className={this.props.display ? "accountDropDown" : "doNotDisplay" } onClick={this.props.handleModalClose}>

                <div className="column">
                    <div onClick={this.navigateToAccount} className="accountDropDownButton">
                        <p>My Account</p>
                    </div>
                </div>

                <div className="column">
                    <div className="accountDropDownButton" onClick={this.navigateToUpload}>
                        <p>Open Shop</p>
                    </div>
                </div>

                <div className="column">
                    <div className="accountDropDownButton" onClick={this.navigateToSettings}>
                        <p>Settings</p>
                    </div>
                </div>

                <div className="column">
                    <div onClick={this.props.handleSignout} className="accountDropDownButton">
                        <p>Sign Out</p>
                    </div>
                </div>

            </div>
        );
    }
} export default AccountDropDown;

// my account
// open shop
// edit account
// sign out