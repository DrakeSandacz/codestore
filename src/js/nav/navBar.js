import React, { Component } from 'react';
import '../../css/nav/navBar.css';
import firebase from 'firebase';
import history from '../../js/history';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import {inject, observer} from 'mobx-react';


@inject('AuthStore')
@observer
class NavBar extends Component {

    constructor(props) {
        super(props);
        const { cookies } = props;

        this.state = {
            isLoggedIn: false,
            user: null,
            // isTop: true,
        };
        this.scrollToTop = this.scrollToTop.bind(this);

    }


    componentDidMount(){

    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }

    navigateHome = () => {
        history.push('/');
    };

    scrollToTop(){
        window.scrollTo(0, 0)
    }

    closeModal() {

    }

    render() {
        const {AuthStore} = this.props;

        const accountControl = this.props.user ? <FontAwesomeIcon onClick={() => {this.scrollToTop(); this.props.displayAccount();}} style={{cursor: 'pointer'}} color="white" icon={faUser}/> :  <p onClick={AuthStore.toggleLoginOpen}>Login</p>;


        return (
            <div className="navBar">
                <div onClick={this.navigateHome} className="navBarLeft">
                    <p>CoderKit</p>
                </div>

                <div className="navBarCenter">

                    {/*<div className="yourAccountButton">*/}
                        {/*<p>Your</p>*/}
                        {/*<p>Account</p>*/}
                    {/*</div>*/}

                    {/*<div className="yourAccountButton">*/}
                        {/*<p>Categories</p>*/}
                    {/*</div>*/}

                </div>

                <div className="navBarRight">
                    {accountControl}

                </div>

            </div>


        );
    }
} export default observer(NavBar);