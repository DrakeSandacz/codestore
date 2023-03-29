import React, { Component } from 'react';
import '../../css/footerPages/licensing.css';


export default class Licensing extends Component {
    constructor(props) {
        super(props);

        const {cookies} = props;

        this.state = {

        };
    }

    render() {
        return (
            <div className="licensingContainer">
                <p className="header"> Usage License </p>
                <p>
                    Use of an item is bound by the license you purchase. A license grants you a non-exclusive and non-transferable right to use and incorporate the item in your personal or commercial projects.
                    CoderKit agrees in writing that customer's license can be transferable in the event of sale of the entire company or the purchase of the company’s intellectual property assets.
                    There are several licenses available:
                    Single License
                    Your use of the item is restricted to a single deployment (one iOS app, one Android app, and one Web Application).
                    You may use the item in work which you are creating for your own purposes or for your client.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).
                    Multiple License
                    Your use of the item is restricted to five deployments (five iOS apps, five Android apps, and five Web Applications).
                    You may use the item in work which you are creating for your own purposes or for your clients.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).
                    Unlimited License
                    Your use of the item may extend to multiple deployments (no limitations).
                    You may use the item in work which you are creating for your own purposes or for your clients.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).
                </p>
                <p className="header"> Single License </p>
                <p>
                    Your use of the item is restricted to a single deployment (one iOS app, one Android app, and one Web Application).
                    You may use the item in work which you are creating for your own purposes or for your client.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).
                </p>
                <p className="header"> Multiple License</p>
                <p>
                    Your use of the item is restricted to five deployments (five iOS apps, five Android apps, and five Web Applications).
                    You may use the item in work which you are creating for your own purposes or for your clients.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).


                </p>
                <p className="header"> Unlimited License </p>
                <p>
                    Your use of the item may extend to multiple deployments (no limitations).
                    You may use the item in work which you are creating for your own purposes or for your clients.
                    The source code may not be redistributed or resold. Though, the compiled app can be distributed in the market.
                    If the item contains licensed components, those components must only be used within the item and you must not extract and use them on a stand-alone basis.
                    If the item was created using materials which are the subject of a GNU General Public License (GPL), your use of the item is subject to the terms of the GPL in place of the foregoing conditions (to the extent the GPL applies).

                </p>
            </div>
        );
    }
};
