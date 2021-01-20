import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import ids from './../SideDrawer/SideDrawer.module.css';

const sideDrawer = () =>{
    
        return (
        <div  id={ids.SideDrawer} >
            <NavigationItems />
        </div>
        );
    
}

export default sideDrawer;