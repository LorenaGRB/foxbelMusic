import logoFoxbel from "./../../../Assets/Imagenes/foxbel-music-white.png";
import React from 'react';

const logo = ()=>{
    return(
        <div className='d-inline-block align-top my-3 mx-4' style={{width: "40%"}}>
        <img src={logoFoxbel} className="img-fluid" alt='logoFoxbel'/>
        </div>
    )
}

export default logo;