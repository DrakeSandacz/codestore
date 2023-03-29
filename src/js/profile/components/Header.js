import React, {Component} from 'react';
import {Link, BrowserRouter} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
import header from '../../../css/profile/components/Header.css';
import {inject, observer} from 'mobx-react';

@inject('AuthStore', 'ProductStore')
@observer
export default class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
        };
    }

    componentDidMount(){
        window.scrollTo(0,0);
    }

    render() {

        const {AuthStore, ProductStore} = this.props;

        return (
            <div className="profilePageHeader">
                <div className="profileContainer">
                    <div className="fullNameContainer">
                        <h1 style={{color: "white", fontSize: 40, fontWeight: 500}}> Drake Sandacz</h1>
                        <p style={{color: "white", fontSize: 24, fontWeight: 500}}> drakeeman </p>
                    </div>
                    <div className="profilePictureContainer">
                        <div className="authorAvatar">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
