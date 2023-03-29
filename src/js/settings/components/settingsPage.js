import React, { Component } from 'react';
import settingsPage from '../../../css/settings/components/settingsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";
import SettingsBox from './settingsBox';

export default class SettingsPage extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;

        this.state = {
        };
    }

    render() {
        return (
            <div className="settingsPageContainer">
                <div className="editAccountContainer">
                    <p className="editAccount">
                        Edit Account
                    </p>
                </div>
                <SettingsBox/>
            </div>

        );
    }
}
