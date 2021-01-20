import React from 'react';
import ids from './Seeker.module.css';


const seeker = (props) => {
    return (
        <form  className='row m-0 p-2' onSubmit= { props.onSubmit }>
            <input 
                id={ids.Search}
                className="form-control col r-3 " 
                type="search" 
                placeholder="Look for a song or Album" 
                aria-label="Search" 
                value={ props.value } 
                onChange={props.onChange}
            />
            <button id={ids.Btn} className="btn btn-default col-xxl" type="submit"> 
                Search
            </button>
        </form>
    )
}
        
export default seeker;

