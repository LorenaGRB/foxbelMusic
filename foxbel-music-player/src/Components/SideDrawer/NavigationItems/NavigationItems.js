import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from './../Logo/Logo';
const NavigationItems = (props) => (
    <div className="col my-3">
            <Logo />
            <div className="col-1"style={{color:"white"}}>
                <ul className="nav flex-column display-6 " >
                    <li>Mi Libreria</li>
                    <NavigationItem className="nav-link">Canciones</NavigationItem>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                </ul>
                <ul className="nav flex-column display-6 ">
                    <li>Playlist</li>
                    <NavigationItem className="nav-link">Rock</NavigationItem>
                    <NavigationItem className="nav-link">Salsa</NavigationItem>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                </ul>
            </div>
    </div>
    

);
export default NavigationItems;