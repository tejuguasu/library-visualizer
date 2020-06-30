import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props){
    return (
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/libraries">Libraries</Link></li>
                            <li><Link to="/configuration">Configuration</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;