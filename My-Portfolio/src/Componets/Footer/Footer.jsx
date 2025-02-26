import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className="footer">
            <p>
            &#169; {new Date().getFullYear()} Rohit Mhetre. All Rights Reserved.
            </p>
        </div>
    );
}

export default Footer;
