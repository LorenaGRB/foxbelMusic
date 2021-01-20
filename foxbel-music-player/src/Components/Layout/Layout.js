import React,{Component} from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import ToggleButton from '../ToggleButton/ToggleButton';
import Classes from './Layout.module.css';
import Aux from './../../Hoc/Auxiliary';

class layout extends Component {
    render(){
        return (
            <Aux>
                    <SideDrawer />
                    <ToggleButton />
            </Aux>
            
        );
    }
}

export default layout;