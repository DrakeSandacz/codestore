import React, { Component } from 'react';
import '../../css/checkout/checkoutPage.css';


export default class CheckoutPage extends Component {
    render() {
        return (
            <div className="checkoutPageContainer">

                <form className="checkoutFormContainer">
                    <div className="group">
                        <input type="text" required/>
                        <span class="highlighter"></span>
                        <span class="bar"></span>
                        <label>Full Name</label>
                    </div>

                    <div className="group">
                        <input  maxLength={19}  required/>
                        <span class="highlighter"></span>
                        <span class="bar"></span>
                        <label>Card Number</label>
                    </div>

                    <div className="group">
                        <input  maxLength={3} required/>
                        <span class="highlighter"></span>
                        <span class="bar"></span>-
                        <label>CVV</label>
                    </div>

                    <div className="group">
                        <input onChange={this.formatDate} maxLength={5} required/>
                        <span class="highlighter"></span>
                        <span class="bar"></span>
                        <label>Expiration Date</label>
                    </div>

                </form>
            </div>
        );
    }
};
