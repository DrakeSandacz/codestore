import React from "react";
import '../../css/footer/footer.css';


import { Link } from "react-router-dom"

export default class Footer extends React.Component {


    render() {
        return (
            <div className="footer">

                <div className="footerContainer">

                    <div className="footerColumn">
                        <div className="footerLinksRow">
                            <p className="footerHeader">CoderKit</p>
                            <Link to="/author"><span className="footerLink">Open A Shop</span></Link>
                            <Link to="/category/all/0"><span className="footerLink">Explore</span></Link>
                            <Link to="/faq"><span className="footerLink">FAQ</span></Link>
                            <Link to="/how-to"><span className="footerLink">How To</span></Link>
                        </div>

                        <div className="footerLinksRow">
                            <p className="footerHeader">Contact Us</p>
                            <span style={{color: 'white', paddingTop: 10, fontWeight: 'lighter', lineHeight: 2, paddingTop: 0,}}>Support Line: (607) 862-2391</span>
                            <span style={{color: 'white', fontWeight: 'lighter', paddingTop: 10, lineHeight: 2}} >Email Us: support@coderkit.io</span>
                        </div>

                        <div className="footerLinksRow">
                            <p className="footerHeader">Help</p>

                            <Link to="/licensing"><span className="footerLink">Licensing</span></Link>
                            <Link to="/privacyPolicy"><span className="footerLink">Privacy Policy</span></Link>
                            <Link to="/termsConditions"><span className="footerLink">Terms & Conditions</span></Link>

                        </div>
                    </div>

                    <div className="footerColumn">
                        <p style={{marginBottom: 0}} className="footerCopyrightText"> Copyright © 2018 Coderkit, LLC. </p>
                    </div>
                </div>
            </div>
        );
    }
}