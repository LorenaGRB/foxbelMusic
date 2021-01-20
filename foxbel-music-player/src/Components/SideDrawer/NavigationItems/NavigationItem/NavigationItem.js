import React from 'react';

const navigationItem= (props) => (
    <li>
        <a className="nav-link " role ='button' style={{color:"rgb(224, 209, 209,0.8)"}}>
            {props.children}
        </a>
    </li>
)


export default navigationItem;