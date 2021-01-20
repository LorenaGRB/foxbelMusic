import React from 'react';
import ids from './Song.module.css';

const album = (props) => {
    return (
        
        <div className="card row-12 p-4" id={ids.albumContainer}>
            <div id={ids.autor} className="bold h4">
                {props.title}
            </div>
            <div id={ids.album}>
                <img className="card-img-top" src={props.coverImg} />
                <svg  xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="black" className="bi bi-play-fill" viewBox="0 0 15 15">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>
            </div>
            
            <div clasName="card-text">by {props.artist}</div>
            
        </div>
    )
}

export default album;