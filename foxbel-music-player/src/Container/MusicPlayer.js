import React,{Component} from 'react';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import Seeker from '../Components/Seeker/Seeker';

class MusicPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedWord: '',
            wantedLink: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event){
        // console.log(this.state.wantedWord);
        
        event.preventDefault();
    }

    handleChange(event){
        this.setState({ wantedWord: event.target.value });
        // console.log(this.state.wantedWord);
    }

    render(){
        // <Seeker clicked = {this.getData(props.value)}/>
        return (
            <div className='row mx-0'>
                <SideDrawer />
                <div>
                    <Seeker 
                        onSubmit={this.handleSubmit} 
                        value={this.state.wantedWord}
                        onChange={this.handleChange}
                    />
                    <div>Results</div>
                    
                    <div>MusicMediaPlayer</div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;