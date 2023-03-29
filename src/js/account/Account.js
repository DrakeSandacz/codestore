import React, { Component } from 'react';
import '../../css/account/account.css';
import firebase from 'firebase';
import {inject, observer} from 'mobx-react';


// Components
import AccountPanel from './components/AccountPanel';
import AccountInfoPanel from './components/AccountInfoPanel';

import AccountNav from './components/AccountNav';
import MyProjects from './components/MyProjects';
import MyLikes from './components/MyLikes';


@inject('ProductStore', 'AuthStore')
@observer
export default class Account extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            tab: 0,

        };

    }

    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }




    setTabState = (value) => {this.setState({tab: value});}

    render() {

        const {ProductStore, AuthStore} = this.props;

        const CurrentView = () => {
            if(this.state.tab === 1){
                // return likes view
                return (<MyLikes user={AuthStore.user}/>);

            } else if (this.state.tab === 2){
                // return downloads view
                return (
                    <div className="testAccountView">
                        <a href="https://connect.stripe.com/oauth/authorize?response_type=code&client_id=ca_EBAOVTJERIcIaBiHuMuxsupUW40XFgVi&scope=read_write">Connect to stripe</a>
                    </div>
                );

            } else if(this.state.tab === 3){
                // return dashboard view
                return (
                    <div className="testAccountView">
                        <h4>dashboard view</h4>
                    </div>
                );

            } else {
                // return projects view
                return (<MyProjects/>);
            }
        };

        return (
            <div className="accountPage">
                <div className="accountPageHeader"><h4>My Account</h4></div>
                <AccountNav setTabState={this.setTabState} tab={this.state.tab}/>

                <CurrentView/>


            </div>
        );
    }
};

