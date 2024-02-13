import { useState } from "react";
import Header from "../Header/Header";
import Dashboard from "../dashboard/Dashboard";
import Sidebar from "../sidebar/Sidebar";
import './Home.css'
const Home = ({darkMode,setDarkMode}:any) => {
    return (
        <>
            <div className="position-relative">
                <div className="">
                    <Sidebar  darkMode={darkMode} />
                </div>
                <div className="position-absolute">
                    <Header setDarkMode={setDarkMode} darkMode={darkMode} />
                    <Dashboard  darkMode={darkMode} />
                </div>
            </div>
        </>
    );
}

export default Home;