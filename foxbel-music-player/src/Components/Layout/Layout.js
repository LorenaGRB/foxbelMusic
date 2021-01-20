import React,{Component} from 'react';
import SideDrawer from '../SideDrawer/SideDrawer';
import ToggleButton from '../ToggleButton/ToggleButton';

import Aux from './../../Hoc/Auxiliary';

class layout extends Component {
    state={
        showSideDrawer : false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer:false});
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer};
        });
    }

    render(){
        return (
            <Aux>
                <ToggleButton clicked= {this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerCloseHandler}/>

            </Aux>
            
        );
    }
}

export default layout;