import React from 'react';


const seeker = (props) => {
    return (
        <form className='row m-0' onSubmit= {props.onSubmit}>
            <input 
                className="form-control col" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={props.value} 
                onChange={props.onChange}
            />
            <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
    )
}
        
export default seeker;

