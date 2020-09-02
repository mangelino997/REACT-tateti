import React, { Fragment } from 'react';
import logoGit from '../assets/gato.png';
import logoLk from '../assets/linkedin.png';
const Footer = (prop) => {
    return (
        <Fragment>
            <div className="footer">
                <div className="footer-copyright text-center py-3">
                    <span>Marcio Angelino</span>
                    <a href="https://github.com/mangelino997" target="_blank">
                        <img src={logoGit}></img>
                 </a>
                    <a href="https://www.linkedin.com/in/marcio-angelino-069592186/" target="_blank">
                        <img src={logoLk}></img>
                 </a>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;