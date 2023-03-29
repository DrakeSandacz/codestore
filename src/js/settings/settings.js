import React, { Component } from 'react';
import '../../css/settings/settings.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretUp} from "@fortawesome/free-solid-svg-icons/index";
import history from '../history';
import SettingsPage from './components/settingsPage';

export default class Settings extends React.Component {

    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
        };
    }

    render() {
        return (
            <div className="settingsContainer">
               <SettingsPage/>
            </div>
        );
    }
}
