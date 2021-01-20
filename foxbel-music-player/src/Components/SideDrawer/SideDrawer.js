import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import classes from './../SideDrawer/SideDrawer.module.css';

const SideDrawer = () => (
    <div  className='sidebar-header' style={{backgroundColor:"rgb(128, 0, 0)"}} >
        <NavigationItems className='sidebar-header'/>
    </div>
    
)

export default SideDrawer;