import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import '../../../css/home/components/footer.css';

export default class Footer extends Component {

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
        return (
            <div className="homeFooter">

                <div className="companyContainer">
                    <h3> Company </h3>
                    <h5> <Link className="linkStyle" to='/upload'> Open A Shop </Link></h5>
                    <h5> <Link className="linkStyle" to="/licensing">Licensing</Link></h5>
                    <h5> <Link className="linkStyle" to='/privacyPolicy'>Privacy Policy</Link> </h5>
                    <h5> <Link className="linkStyle" to='/termsConditions'> Terms & Conditions </Link></h5>
                </div>

                <div className="contactUs">
                    <h3> Contact us</h3>
                    <h5> Phone: (607) 862-2391</h5>
                    <h5> Email: support@coderkit.io</h5>
                </div>

                <div className="emailContainer">
                    <h3> Sign Up For Exclusive Updates </h3>
                    <input
                        type="email"
                        className="emailSignUp"
                        placeholder=" Enter Email"
                    />
                </div>
            </div>

        );
    }
}



