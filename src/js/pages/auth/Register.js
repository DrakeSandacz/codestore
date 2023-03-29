import React from "react";
import { Link, Redirect, Router, Route, browserHistory, IndexRoute, withRouter} from 'react-router-dom';
import firebase from 'firebase';


export default class Register extends React.Component {

    constructor(props) {
        super(props);

        const { cookies } = props;
        this.state = {
            isAuthenticated: false,
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

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onRegister = () => {
        console.log('onregister function called');
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((user) => {
                firebase.auth().currentUser.sendEmailVerification()
                    .then(function() {
                        console.log("email sent");
                    })
                    .catch(function(error) {
                        console.log("email did not send :/" + error);
                    });
                console.log('got em');
                this.setState({ redirectToSignIn: true });
            })
            .catch((error) => {
                console.log('error ' + error);
            })
    };



    render() {
        const { from } = this.props.location.state || { from: { pathname: "/signIn" } };
        const { redirectToSignIn } = this.state;
        if (redirectToSignIn) {
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
                            <input onChange={this.handleChange} value={this.state.password}  name="password" className="emailInput" autoCapitalize="none" />
                        </label>

                    </form>
                </div>
                <Route>
                    <button type="submit" onClick={this.onRegister}>
                        Register
                    </button>
                </Route>
            </div>

        );
    }
}



