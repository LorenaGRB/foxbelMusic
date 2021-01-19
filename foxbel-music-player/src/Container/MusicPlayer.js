import React,{Component} from 'react';
// import SideDrawer from '../Components/Navigation/SideDrawer/SideDrawer';
import Aux from '../Hoc/Auxiliary';

class MusicPlayer extends Component {
    render(){
        return (
            <div className='row'>
                <div >SideDrawer</div>
                <div>
                    <div>Seeker</div>
                    <div>Results</div>
                    <div>MusicMediaPlayer</div>
                </div>
                
            </div>
        )
    }
}

export default MusicPlayer;