import { ImMobile } from "react-icons/im";
import { MdOutlineWebAsset } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import './Dashboard.css';
const Dashboard = ({ setDarkMode, darkMode }: any) => {
    console.log(`Check your log here!`, darkMode);
    return (
        <>
            <div className="container">
                <div className="accordion border-0" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <i className="bi bi-caret-down-fill"></i>
                                <h4>Recent Projects</h4>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                            <div className={`accordion-body ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`}>
                                <div className="row my-3">
                                    <div className="col-3 ">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon mobile d-flex justify-content-center">
                                                    <ImMobile className="color-mobile" size={20} />
                                                </div>
                                                <h4>App Development</h4>
                                                <p>(development)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon web d-flex justify-content-center">
                                                    <MdOutlineWebAsset className="color-web" size={20} />
                                                </div>
                                                <h4>Web Design</h4>
                                                <p>(Design)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    {/* <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon drone d-flex justify-content-center">
                                                    <TbDrone className="color-drone" size={20} />
                                                </div>
                                                <h4>Creative Project</h4>
                                                <p>(Design)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon marketing d-flex justify-content-center">
                                                    <FaBriefcase className="color-marketing" size={20} />
                                                </div>
                                                <h4>Marketing & Sales</h4>
                                                <p>(Marketing)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <i className="bi bi-caret-down-fill"></i>
                                <h4>Favourites</h4>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                            <div className={`accordion-body ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`}>
                                <div className="row my-3">
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon mobile d-flex justify-content-center">
                                                    <ImMobile className="color-mobile" size={20} />
                                                </div>
                                                <h4>App Development</h4>
                                                <p>(development)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card h-100">
                                            <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                                                <div className="card-icon web d-flex justify-content-center">
                                                    <MdOutlineWebAsset className="color-web" size={20} />
                                                </div>
                                                <h4>Web Design</h4>
                                                <p>(Design)</p>

                                                <ul className="p-0">
                                                    <li className="d-flex justify-content-between">
                                                        <p>Progress Task</p>
                                                        <span>43</span>
                                                    </li>
                                                    <li className="d-flex justify-content-between">
                                                        <p>Complete Task</p>
                                                        <span>16</span>
                                                    </li>
                                                    {/* <li className="d-flex justify-content-start">
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                        <i className="bi bi-person-circle fs-26 mn-2"></i>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className={`accordion-button ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <i className="bi bi-caret-down-fill"></i>
                                <h4>Worked On</h4>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                            <div className={`accordion-body ${darkMode ? 'darkmode' : 'lightmode'} border-bottom`}>
                                <div className="row border-bottom py-2">
                                    <div className="col-md-8">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                                Design Stage
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="d-flex align-items-center">
                                            <GoDotFill color="blue" />
                                            <p className="m-0">Web Design</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        Thursday
                                    </div>
                                </div>
                                <div className="row border-bottom py-2">
                                    <div className="col-md-8">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                                Confirm additional service
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="d-flex align-items-center">
                                            <GoDotFill className="pink" />
                                            <p className="m-0">App Development</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2 pink">
                                        Tomorrow
                                    </div>
                                </div>
                                <div className="row border-bottom py-2">
                                    <div className="col-md-8">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckCheckedDisabled" checked disabled />
                                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                                Customer Experiance insight
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="d-flex align-items-center">
                                            <GoDotFill color="blue" />
                                            <p className="m-0">Web Design</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        Thursday
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;