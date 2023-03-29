import React,{ Component } from "react";
import {Link} from 'react-router-dom'
import history from '../history';
import '../../css/checkout/checkout.css';
import {CardElement, injectStripe, StripeProvider, Elements} from 'react-stripe-elements';
import {SkyLightStateless} from 'react-skylight';
import {inject, observer} from "mobx-react";




@inject('CheckoutStore', 'AuthStore')
@observer
class CheckoutForm extends Component {
    constructor(props) {
        super(props);
        const { cookies } = props;
        this.state = {
            displayCheckout: false,
        };

        this.submit = this.submit.bind(this);

    }

    componentDidMount(){
    }
    componentWillMount() {
    }
    componentWillUnmount() {
    }


    async submit(ev) {
        // User clicked submit
        let {token} = await this.props.stripe.createToken({name: "Name"});
        console.log('token: ' + token);

        let response = await fetch("/charge", {
            method: "POST",
            headers: {"Content-Type": "text/plain"},
            body: token.id
        });

        if (response.ok) console.log("Purchase Complete!")
    }

    // formatDate = () => {
    //
    // };
    //
    // navigateToCheckout = () => {
    //     history.push('/checkoutPage')
    // };

    render() {

        const {CheckoutStore, AuthStore} = this.props;

        var checkoutDialogStyles={
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            width: '50%',
            height: '400px',
            position: 'fixed',
            top: '50%',
            left: '50%',
            marginTop: '-200px',
            marginLeft: '-25%',
            backgroundColor: '#fff',
            borderRadius: '2px',
            zIndex: 100,
            padding: '15px',
            boxShadow: '0 0 4px rgba(0,0,0,.14),0 4px 8px rgba(0,0,0,.28)'
        };


        return (

            <SkyLightStateless
                isVisible={CheckoutStore.checkoutVisible}
                onOverlayClicked={CheckoutStore.toggleCheckoutClosed}
                onCloseClicked={CheckoutStore.toggleCheckoutClosed}
                dialogStyles={checkoutDialogStyles}
            >
                <p>Would you like to complete the purchase?</p>
                <CardElement/>
                <button onClick={this.submit}>Send</button>

            </SkyLightStateless>



        );
    }
} export default injectStripe(CheckoutForm);


