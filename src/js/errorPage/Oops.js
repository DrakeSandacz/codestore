import React, { Component } from 'react';
import '../../css/errorPage/Oops.css';
import firebase from 'firebase';
import history from '../../js/history';
import {inject, observer} from 'mobx-react';

@inject('AuthStore')
@observer
export default class Oops extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
        };
    }
    render() {
        const {AuthStore} = this.props;

        return (
            <div className="oopsContainer">
                <h1 style={{color: "white", fontWeight: 500}}> Error</h1>
                <p style={{color: "white"}}> The page you were looking for doesn't seem to exist!</p>
                <img className="oopsImage" src={require("./undraw_bug_fixing_oc7a.svg")}/>
            </div>


        );
    }
}