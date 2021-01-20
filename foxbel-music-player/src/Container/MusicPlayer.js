import React,{Component} from 'react';
import SideDrawer from '../Components/SideDrawer/SideDrawer';
import Seeker from '../Components/Seeker/Seeker';
import axios from 'axios';

class MusicPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedWord: '',
            
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event){
        // console.log(this.state.wantedWord);
        let wantedLink = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=album:"${this.state.wantedWord}"`;
        axios.get(wantedLink)
            .then(response => {
                console.log(response);
            });
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