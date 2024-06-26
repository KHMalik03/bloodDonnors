import { Outlet, Link } from "react-router-dom";

import './Layout.css';

function Layout(){
    return(
        <>
        <nav className="navbar">
            <div className="logo">
                <img src="/logo.png" alt="Your Company Logo"/>
                <span>Blood</span>
            </div>
            <ul className="nav-links">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/create`}>Create</Link></li>
            </ul>
        </nav>
        <Outlet/>
        <footer className="footer">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </>
    )
};

export default Layout
