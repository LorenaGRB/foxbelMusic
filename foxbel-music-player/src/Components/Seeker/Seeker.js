import React from 'react';


const seeker = (props) => {
    return (
        <form className='row m-0 p-2' onSubmit= { props.onSubmit }>
            <input 
                className="form-control col r-3" 
                type="search" 
                placeholder="Search" 
                aria-label="Search" 
                value={ props.value } 
                onChange={props.onChange}
            />
            <button className="btn btn-outline-danger" type="submit">Search</button>
        </form>
    )
}
        
export default seeker;

