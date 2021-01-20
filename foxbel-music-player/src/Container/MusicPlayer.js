import React,{Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Seeker from '../Components/Seeker/Seeker';
import axios from 'axios';
import Aux from './../Hoc/Auxiliary';
import foxbelLogo from './../Assets/Imagenes/foxbel-music-white.png';

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
            <Aux>
                <div>
                <img src={foxbelLogo} className='col-md pt-3 pl-3' style={{maxWidth:'450px', display:'block',margin:'auto'}}/>
                </div>
                <div className ='row mx-0 '>
                        <Layout />
                    <div className ='col mx-0 '>
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
            </Aux>
            
        )
    }
}

export default MusicPlayer;