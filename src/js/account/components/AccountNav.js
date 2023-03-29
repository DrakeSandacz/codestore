import React, { Component } from 'react';
import '../../../css/account/components/accountNav.css';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';


@inject('ProductStore')
@observer
export default class AccountNav extends Component {

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
            <div className="accountNav">
                <div className="accountLinksContainer">
                    <div onClick={() => {this.props.setTabState(0)}} className={this.props.tab === 0 ? "accountLinkActive" : "accountLink"}>
                        <p>Projects</p>
                    </div>

                    <div onClick={() => {this.props.setTabState(1)}} className={this.props.tab === 1 ? "accountLinkActive" : "accountLink"}>
                        <p>Likes</p>
                    </div>

                    <div onClick={() => {this.props.setTabState(2)}} className={this.props.tab === 2 ? "accountLinkActive" : "accountLink"}>
                        <p>Downloads</p>
                    </div>

                    <div onClick={() => {this.props.setTabState(3)}} className={this.props.tab === 3 ? "accountLinkActive" : "accountLink"}>
                        <p>Dashboard</p>
                    </div>

                </div>



                <div className="accountSaveContainer">

                </div>

            </div>
        );
    }
};

