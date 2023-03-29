import React, { Component } from 'react';
import settingsBox from '../../../css/settings/components/settingsBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';

@inject('AuthStore')
@observer
export default class SettingsBox extends React.Component {

    constructor(props) {
        super(props);

        const {cookies} = props;

        this.state = {
        };
    }

    handleThis = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        const {AuthStore} = this.props;
        return (
            <div className="settingsSection">
                <div className="settingsBoxContainer">
                    <div className="settingsTitleContainer">
                        <p className="settingsTitle">
                            Username
                        </p>
                    </div>
                    <p className="usernameSettingsText">
                        This is the name people will see when you post a template, you can change it here...
                    </p>
                    <div className="settingsInputContainer">
                        USERNAME
                        <input className="settingsInput" onChange={this.handleThis} />
                    </div>
                    <div className="changeButtonContainer">
                        <button className="changeButton">Save</button>
                    </div>
                </div>

                <div className="settingsBoxContainer">
                    <div className="settingsTitleContainer">
                        <p className="settingsTitle">
                           Change Password
                        </p>
                    </div>
                    <p className="usernameSettingsText">
                        To change password, enter your email and we will send a link to change it.
                    </p>
                    <div className="forgotInputContainer" >
                        EMAIL
                        <input onChange={(event) => AuthStore.setEmail(event)} name="email" type="text" className="settingsInput" autoCapitalize="none"/>
                    </div>
                    <div className="changeButtonContainer">
                        <button className="changeButton" onClick={AuthStore.changePasswordEmail}>Send</button>
                    </div>
                </div>

                <div className="settingsBoxContainer">
                    <div className="deleteTitleContainer">
                        <p className="deleteTitle">
                            Delete Account
                        </p>
                    </div>
                    <p className="usernameSettingsText">
                        This will delete your account, sad to see you go!
                    </p>
                    <div className="deleteButtonContainer">
                        <button className="deleteButton" onClick={AuthStore.deleteAccount}>DELETE ACCOUNT</button>
                    </div>
                </div>
            </div>

        );
    }
}
