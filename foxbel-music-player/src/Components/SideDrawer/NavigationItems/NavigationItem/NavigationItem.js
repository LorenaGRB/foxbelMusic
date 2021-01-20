import React from 'react';
import ids from './Navigation.module.css';

const navigationItem= (props) => (
    <li>
        <a id={ids.link} className="nav-link ml-2 " role ='button'>
            {props.children}
        </a>
    </li>
)


export default navigationItem;