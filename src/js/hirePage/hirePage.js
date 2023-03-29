import React, { Component } from 'react';

export default class HirePage extends Component {
    constructor(props) {
        super(props);
        const {cookies} = props;
        this.state = {

        };
    }

    render() {
        return (
            <div className="checkoutContainer">
                <div className="checkoutFormContainer">
                    <form>

                        <div className="group">
                            <input type="text" required/>
                            <span class="highlighter"></span>
                            <span class="bar"></span>
                            <label>Full Name</label>
                        </div>

                        <div className="group">
                            <input  maxLength={3} required/>
                            <span class="highlighter"></span>
                            <span class="bar"></span>
                            <label>Email</label>
                        </div>

                        <div className="group">
                            <input  maxLength={19}  required/>
                            <span class="highlighter"></span>
                            <span class="bar"></span>
                            <label>Phone Number</label>
                        </div>

                        <div className="group">
                            <input onChange={this.formatDate} required/>
                            <span class="highlighter"></span>
                            <span class="bar"></span>
                            <label>Message</label>
                        </div>

                        <button className="payButton"> Send </button>
                    </form>
                </div>
            </div>
        );
    }
};
