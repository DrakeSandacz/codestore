import React, { Component } from 'react';
import '../../../css/account/components/accountPanel.css';
import {Link} from 'react-router-dom'
import history from '../../history';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';


@inject('ProductStore', 'AuthStore')
@observer
export default class AccountPanel extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {

        };
    }

    handleNavigateToSettings = () => {
        history.push('/settings')
    };

    render() {

        const {ProductStore, AuthStore} = this.props;

        return (
            <div className="accountPanelContainer">
                <div className="accountPanel">
                    <div className="dashboardTextContainer">
                        <p className="dashboardText"> DASHBOARD </p>
                    </div>
                    <div className="accountInfoContainer">
                        <div className="accountAvatar">
                        <div className="avatarContainer"></div>
                        </div>
                        <div className="nameProfileContainer">
                            <p className="nameText">
                                Drake Sandacz need to be fixed
                            </p>
                            <p className="viewProfileText">
                                <Link className="viewProfileLink" to='/profile'>
                                    View Profile
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="sideBarTabs">
                        <div className="firstTab">
                            <button className="firstTabButton">
                                Projects
                            </button>
                        </div>

                        <div className="secondTab">
                            <button className="secondTabButton">
                                Downloads
                            </button>
                        </div>

                        <div className="thirdTab">
                            <button className="thirdTabButton">
                                Liked Items
                            </button>
                        </div>

                        <div className="fourthTab">
                            <button className="fourthTabButton" onClick={this.handleNavigateToSettings}>
                                Edit Account
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
};
