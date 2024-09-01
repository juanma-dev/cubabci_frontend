import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { getRoute, getRouteEN } from './utils';

function NavES({parent}) {
    // Step 1: Create a state to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Step 2: Function to open the sidebar
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

    // Step 3: Function to close the sidebar
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {isSidebarOpen && (
                <div className="sidebar">
                    <a onClick={closeSidebar} href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f2f2"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></a>
                    <Link onClick={closeSidebar} to="/">Inicio</Link>
                    <Link onClick={closeSidebar} to="/diplomatics">Síndrome de La Habana</Link>
                    <Link onClick={closeSidebar} to="/articles">Artículos</Link>
                </div >
            )}
            <div className="topnav es">
                <a onClick={openSidebar} className="menu-button" href="#"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f2f2f2"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" /></svg></a>
                <Link className="hideOnMobile" to="/">Inicio</Link>
                <Link className="hideOnMobile" to="/diplomatics">Síndrome de La Habana</Link>
                <Link className="hideOnMobile" to="/articles">Artículos</Link>
                <Link style={{ float: 'right' }} to={getRoute(parent)}>ES</Link>
                <Link style={{ float: 'right' }} to={getRouteEN(parent)}>EN</Link>
            </div >
        </>
    );
}

export default NavES;