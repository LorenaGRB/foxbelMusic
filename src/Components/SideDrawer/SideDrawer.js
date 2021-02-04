import React from 'react';
import NavigationItems from './NavigationItems/NavigationItems';
import Classes from './../SideDrawer/SideDrawer.module.css';
import Aux from './../../Hoc/Auxiliary';

const sideDrawer = (props) =>{
        let attachedClasses = [Classes.Close];
            if(props.open) {
                attachedClasses=[ Classes.Open];
            }
        return (
            <Aux>
                <div  className={attachedClasses} >
                    <NavigationItems />
                </div>
            </Aux>
        );
}

export default sideDrawer;