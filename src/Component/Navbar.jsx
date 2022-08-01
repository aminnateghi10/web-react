import React,{useState} from "react";
function Navbar() {
    const [toggle , settoggle] = useState()
    let toggleset = ()=>{
        settoggle(!toggle)
    }
    return (
        <header className="desktop-header-3 light fixed-top">
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button onClick={toggleset} className="navbar-toggler" data-target="#navbarNavDropdown" data-toggle="collapse"
                        type="button">
                    <span className="navbar-toggler-icon"></span></button>
                <div className={`collapse navbar-collapse justify-content-center ${toggle ? 'show' : ''}`} >
                    <ul className="navbar-nav scrollspy">
                        <li className="nav-item">
                            <a className="nav-link" href="#home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#experience" className="nav-link">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a href="#works" className="nav-link">Works</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        </div>
    </header>)
}

export default Navbar;