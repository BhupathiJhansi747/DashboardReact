import { MdToggleOn } from "react-icons/md";
import { MdToggleOff } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";

import './Header.css';
import { useState } from "react";
const Header = ({ setDarkMode, darkMode }: any) => {
    const [active, setActive] = useState(true)
    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    }
    const handleStatus = () => {
        setActive(!active);
    }
    return (
        <>
            <nav className={`navbar ${darkMode ? 'darkmode' : 'lightmode'} border h-25`}>
                <div className="container-fluid">
                    <a className={`navbar-brand ${darkMode ? 'darkmode' : 'lightmode'}`}>Home</a>
                    <div className="d-flex align-items-center">
                        <form className="d-flex justify-content-end align-items-center position-relative">
                            <i className="bi bi-search search"></i>
                            <input id='search' className="form-control me-2 w-50 rounded-search" type="search" placeholder="Search" />
                            <i className="bi bi-plus-circle-fill fs-26 mx-2 "></i>
                            <i className="bi bi-bell fs-20 mx-2 position-relative">
                                <RxDotFilled className="rdxDot text-danger" />
                            </i>
                            <div className="btn-group dropstart dropdown">
                                <i className="bi bi-person-circle fs-26 mx-2 " data-bs-toggle="dropdown" aria-expanded="false"></i>
                                <div className={`dropdown-menu ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                    <div className="card w-100 h-100 border-0">
                                        <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                            <div className="d-flex">
                                                <i className="bi bi-person-circle fs-45 mx-2 "></i>
                                                <div>
                                                    <h4>Tajul Islam</h4>
                                                    <span>tajulislam@gmail.com</span>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="d-flex justify-content-between" onClick={handleStatus}>
                                                <p>Active Status</p>
                                                {active ? <MdToggleOn size={20} className="toggle" /> : <MdToggleOff size={20} className="toggle" />}
                                            </div>
                                            <div className="d-flex justify-content-between" onClick={handleDarkMode}>
                                                <p>Darkmode</p>
                                                {darkMode ? <MdToggleOn size={20} className="toggle" /> : <MdToggleOff size={20} className="toggle" />}
                                            </div>
                                            <hr />
                                            <div>
                                                <p>Settings</p>
                                                <p>Logout</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;