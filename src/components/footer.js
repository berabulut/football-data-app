import React from 'react';

const Footer = (props) => (
    <div className = "footer">
        <div className = "container">
            <h3 className = "footer__text"> {props.text} </h3>        
        </div>
    </div>
);

Footer.defaultProps = {
    text: '@football-data.org/'
};

export default Footer;