import React, { Component } from "react";
import "../../../style.scss"

class Footer extends Component {
    render() {
        return (
        <footer className="footer">
            <div className="footer-wrapper">
                <p className="footer-text">by Irakliy Ko</p>
                <p className="footer-text">All right reserved &#169; 2018</p>
            </div>
        </footer>
        )
    }
}

export default Footer;