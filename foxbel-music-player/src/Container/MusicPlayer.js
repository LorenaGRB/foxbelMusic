import React,{Component} from 'react';
import Layout from '../Components/Layout/Layout';
import Seeker from '../Components/Seeker/Seeker';
import axios from 'axios';
import Aux from './../Hoc/Auxiliary';
import Songs from '../Components/Songs/Songs';
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
        // eslint-disable-next-line
        DZ.api(`/search?q=track:"${this.state.wantedWord}"`, function (response) { 
            console.log(response);
            this.setState({ wantedMusicResponse: response.data })
        }.bind(this));
        event.preventDefault();
    }

    handleChange(event){
        this.setState({ wantedWord: event.target.value });
        // console.log(this.state.wantedWord);
    }

    render(){
        const list = this.state.wantedMusicResponse.map(
            albumData => {
                return <Songs 
                    title={albumData.title}
                    artist={albumData.artist.name}
                    coverImg={albumData.album.cover_medium}
                />;
            }
        );
        return (
            <Aux>
                <div>
                <img src={foxbelLogo} className='col-md pt-3 pl-3' style={{maxWidth:'450px', display:'block',margin:'auto'}}/>
                </div>
                <div className ='row mx-0 '>
                        <Layout />
                    <div className ='col mx-0 pl-0'>
                        <Seeker 
                            onSubmit = {this.handleSubmit} 
                            value = {this.state.wantedWord}
                            onChange = {this.handleChange}
                        />
                        
                        <div className='row mx-0 p-0'>{list} </div>
                        
                        <div>MusicMediaPlayer</div>
                    </div>
                </div>
            </Aux>
            
        )
    }
}

export default MusicPlayer;