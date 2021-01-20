import React,{Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Seeker from '../Components/Seeker/Seeker';
import ids from './MusicPlayer.module.css';
import axios from 'axios';

class MusicPlayer extends Component {
    constructor(props){
        super(props);
        this.state = {
            wantedWord: '',
            wantedMusicResponse: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    handleSubmit(event){
        // console.log(this.state.wantedWord);
        let wantedLink = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=album:"${this.state.wantedWord}"`;
        axios.get(wantedLink)
            .then(response => {
                // console.log(response);
                this.setState({wantedMusicResponse: response.data.data});
                // console.log(this.state.wantedMusicResponse);
            });
        event.preventDefault();
    }

    handleChange(event){
        this.setState({ wantedWord: event.target.value });
        // console.log(this.state.wantedWord);
    }

    render(){


        const list = this.state.wantedMusicResponse.map(
            song => {
                return <div> { song.title } </div>
            }
        );

        return (
            
            <div id={ids.Contenedor}className ='row mx-0 '>
                <Layout />
                <div>
                    <Seeker 
                        onSubmit = {this.handleSubmit} 
                        value = {this.state.wantedWord}
                        onChange = {this.handleChange}
                    />
                    {list}
                    <div>Results </div>
                    <div>MusicMediaPlayer</div>
                </div>
            </div>
        )
    }
}

export default MusicPlayer;