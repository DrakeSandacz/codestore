import React, { Component } from 'react';
import '../../../css/account/components/accountInfoPanel.css';

import firebase from 'firebase';
import {inject, observer} from 'mobx-react';


@inject('ProductStore')
@observer
export default class AccountInfoPanel extends Component {

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

        const {ProductStore} = this.props;

        return (
            <div className="accountInfoPanelContainer">
                <div className="accountInfoPanel">
                    <div className="accountHeaderContainer">
                        <h1 className="accountHeader">
                            Account
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
};

