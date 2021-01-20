import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from './../Logo/Logo';
import ids from './NavigationItems.module.css';

const NavigationItems = (props) => (
    <div className="col my-3">
            <Logo />
            <div className="col" style={{color:"white"}}>
                <ul className="nav flex-column " >
                    <li id={ids.Subtitle} className="nav-link" role ='button'> <a> Mi Libreria </a> </li>
                    <NavigationItem className="nav-link">Recientes</NavigationItem>
                    <NavigationItem className="nav-link">Artistas</NavigationItem>
                    <NavigationItem className="nav-link">Albums</NavigationItem>
                    <NavigationItem className="nav-link">Estaciones</NavigationItem>
                </ul>
                <ul className="nav flex-column ">
                    <li id={ids.Subtitle} className="nav-link" role ='button'> <a> Playlist </a> </li>
                    <NavigationItem className="nav-link">Rock</NavigationItem>
                    <NavigationItem className="nav-link">Salsa</NavigationItem>
                    <NavigationItem className="nav-link">Cumbia</NavigationItem>
                    <NavigationItem className="nav-link">Baladas</NavigationItem>
                </ul>
            </div>
    </div>
    

);
export default NavigationItems;