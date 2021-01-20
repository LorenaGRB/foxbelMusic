import logoFoxbel from "./../../../Assets/Imagenes/foxbel-music-white-icon.png";
import React from 'react';

const logo = ()=>{
    return(
        <div className='d-inline-block align-top my-3 mx-2' style={{width: "70%"}}>
        <img src={logoFoxbel} className="img-fluid" alt='logoFoxbel'/>
        </div>
    )
}

export default logo;