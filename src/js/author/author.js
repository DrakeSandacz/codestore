import React, { Component } from 'react';
import '../../css/author/author.css';
import {Route, withRouter, HashRouter, BrowserRouter,Redirect, Router, Switch } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import history from '../history';
import UploadPage from '../upload/UploadPage';
import LoginComponent from '../auth/login';
import {SkyLightStateless} from 'react-skylight';
import {inject, observer} from 'mobx-react';

@inject('AuthStore')
@observer
export default class Author extends Component {
    constructor(props) {
        super(props);

        const {cookies} = props;
        this.state = {
            image: null,
            url: '',
        };
    }

    render() {
        const ProtectUpload = () => {
            if(!AuthStore.user) {
                window.alert('Please login to open this page!');
            }
            else {
                history.push('/upload');
            }
        };
        const {AuthStore} = this.props;
        return (
            <div className="authorContainer">
                <div className="authorFormContainer">
                    <div className="earnContainer">
                        <h1 style={{color: "white", fontWeight: 500,}}> Become an Author! </h1>
                        <h2 className="h2Tag"> Start making money by selling any kind of code to the thousands of buyers on CoderKit.</h2>
                    </div>
                    <div className="openShopButtonContainer">
                        <button className="openShopButton" onClick={ProtectUpload}>Open A Shop</button>
                    </div>
                </div>

                <div className="authorFormContainer">
                    <div className="coderKitContainer">
                        <img className="coderKitImage" src={require("./Webp.net-resizeimage.png")}/>
                    </div>
                    <div className="openShopDescriptionContainer">
                        <h1 style={{color: "white", fontWeight: 400, textAlign: "left",}}>Your shop is up and running in no time</h1>
                        <p className="steps"> <strong>1.</strong> Sign up</p>
                        <p className="steps"> <strong>2.</strong> Upload your item </p>
                        <p className="steps"> <strong>3.</strong> Our review team will review the item</p>
                        <p className="steps"> <strong>4.</strong> Once approved, it will appear on CoderKit</p>
                        <p className="steps"> <strong>5.</strong> Have income transferred via bitcoin</p>
                    </div>
                </div>

                <div className="authorFormContainer">
                    <div className="whyContainer">
                        <h1 className="perksHeader" style={{color: "white", fontWeight: 400}}> Perks of being with Coderkit </h1>
                        <p className="perks"> <strong>-</strong> Earn an <s className="perksSlash">80%</s> (100% while in beta) commission rate </p>
                        <p className="perks"> <strong>-</strong> We promote every author's content </p>
                        <p className="perks"> <strong>-</strong> Excellent customer support team</p>
                        <p className="perks"> <strong>-</strong> No exclusivity! Feel free to keep selling your products.</p>
                        <p className="perks"> <strong>-</strong> Set your own price for your product </p>
                    </div>
                    <div className="walletContainer">
                        <img className="walletImage" src={require("./undraw_wallet_aym5.svg")}/>
                    </div>
                </div>

                <div className="authorFormContainer">
                    <div className="shopSignUpContainer">
                        <h1 style={{color: "white", fontWeight: 400, padding: 0,}}> Open your shop today! </h1>
                        <button className="openButton" onClick={ProtectUpload}> Open Shop </button>
                    </div>
                </div>
            </div>
        );
    }
};