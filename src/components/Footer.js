import React, { Fragment } from 'react';
import myWeb from '../assets/global.png';
const Footer = (prop) => {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-copyright text-center py-1">
                    <a href="https://mangelino997.github.io/my-web/" 
                    target="_blank" className="my-web">
                    My Website   <img src={myWeb}></img>
                 </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;