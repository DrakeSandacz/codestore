import React from "react";
import { Link, Redirect, Router, Route, browserHistory, IndexRoute, withRouter} from 'react-router-dom';
import firebase from 'firebase';

export default class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            email: '',
            password: '',
            user: null,
            uid: '',
            loading: false,
        };
    }

    componentDidMount(){
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    forgotPasswordEmail = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(function() {
                console.log("got it");
            })
            .catch(function(error) {
                console.log("error" + error);
            });
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    navigateToSignIn = () => {
        this.props.history.push('SignIn');
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToHome } = this.state;
        if (redirectToHome) {
            return <Redirect to={from} />;
        }
        return (
            <div className="container">
                <div className="loginContainer">
                    <form className="inputForm">
                        <label>
                            Email:
                            <br/>
                            <input value={this.state.email} onChange={this.handleChange} name="email" type="text" className="emailInput" autoCapitalize="none" />
                        </label>
                    </form>
                </div>
                <Route>
                    <button type="submit" onClick={this.forgotPasswordEmail}>
                        Recover
                    </button>
                </Route>
            </div>
        );
    }
}