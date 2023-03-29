import React from "react";
import { Link, Redirect, Router, Route, browserHistory, IndexRoute, withRouter} from 'react-router-dom';
import firebase from 'firebase';
import '../../../css/auth/signIn.css';
export default class SignIn extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            email: '',
            password: '',
            user: null,
            uid: '',
            loading: false,
            redirectToHome: false,
        };
    }

    componentDidMount() {

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleNavigateToRegister = () => {
        this.props.history.push('register');
    };

    signIn = () => {
        console.log('onregister function called');
        firebase.auth().signInAndRetrieveDataWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                firebase.auth().onAuthStateChanged(user => {
                    if (user.emailVerified === false) {
                        console.log("you are not vaildated");
                        this.setState({
                            redirectToHome: false,
                        })
                    } else {
                        this.setState({
                            redirectToHome: true,
                        });
                    }
                });
            })
    };

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/home" } };
        const { redirectToHome } = this.state;
        if (redirectToHome){
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
                        <label>
                            Password:
                            <br/>
                            <input onChange={this.handleChange} value={this.state.password}  name="password" type="password" className="emailInput" autoCapitalize="none" />
                        </label>

                    </form>
                </div>
                <Route>
                    <button type="submit" onClick={this.signIn}>
                        Sign In
                    </button>
                </Route>
                <br/>
                <Route to="SignIn">
                    <button type="submit" onClick={this.handleNavigateToRegister}>
                        Register
                    </button>
                </Route>

            </div>
        );
    }
}



