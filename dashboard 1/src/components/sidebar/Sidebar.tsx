import { RiTaskLine } from "react-icons/ri";
import { HiOutlineCalendar } from "react-icons/hi2";
import './Sidebar.css';
import { ImMobile } from "react-icons/im";
import { MdOutlineWebAsset } from "react-icons/md";
import { TbDrone } from "react-icons/tb";
import { FaBriefcase } from "react-icons/fa";
const Sidebar = ({ setDarkMode, darkMode }: any) => {
    console.log(`Check your log here!`, darkMode);
    return (
        <>

            <div className="w-20">
                <div className="card rounded-0">
                    <div className={`card-body ${darkMode ? 'darkmode' : 'lightmode'} `}>
                        <ul>
                            <li className="d-flex h-25 py-3">
                                <i className="bi bi-house me-4"></i>
                                <h3>Trim.</h3>
                            </li>
                            <li className="d-flex">
                                <i className="bi bi-house me-4"></i>
                                <p>Home</p>
                            </li>
                            <li className="d-flex">
                                <RiTaskLine className="me-4" />
                                <p>My Tasks</p>
                            </li>
                            <li className="d-flex">
                                <HiOutlineCalendar className="me-4" />
                                <p>My Plan</p>
                            </li>
                            <li className="d-flex">
                                <i className="bi bi-chat-right-dots me-4"></i>
                                <p>Inbox</p>
                            </li>
                            <li className="d-flex">
                                <i className="bi bi-people me-4"></i>
                                <p>People</p>
                            </li>
                            <li className="d-flex">
                                <i className="bi bi-file-earmark-text me-4"></i>
                                <p>Reporting</p>
                            </li>
                            <div className="mt-4">
                                <div className="accordion p-0" id="accordionExample2">
                                    <div className="accordion-item p-0">
                                        <h2 className="accordion-header p-0">
                                            <button className={`accordion-button ${darkMode ? 'darkmode' : 'lightmode'} accordion-2 p-0`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Favourites
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse accordion-2 collapse show" data-bs-parent="#accordionExample2">
                                            <div className={`accordion-body ${darkMode ? 'darkmode' : 'lightmode'} accordion-2 px-0`}>
                                                <div className="row align-items-center">
                                                    <div className="col-3">
                                                        <div className="card-icon-2 mobile d-flex justify-content-center">
                                                            <ImMobile className="color-mobile" size={16} />
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>App Development</p>
                                                    </div>
                                                </div>
                                                <div className="row align-items-center">
                                                    <div className="col-3">
                                                        <div className="card-icon-2 web d-flex justify-content-center">
                                                            <MdOutlineWebAsset className="color-web" size={16} />
                                                        </div>
                                                    </div>
                                                    <div className="col-9">
                                                        <p>Web Design</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            <div className="d-flex align-items-center">
                                <form className="d-flex justify-content-start align-items-center position-relative">
                                    <i className="bi bi-search search-2"></i>
                                    <input id='search' className="form-control me-2 w-75 rounded-search" type="search" placeholder="Search Project" />
                                    <i className="bi bi-plus-circle-fill fs-26 mx-2 "></i>
                                </form>
                            </div>
                            <p className="mt-4">Projects</p>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <div className="card-icon-2 mobile d-flex justify-content-center">
                                        <ImMobile className="color-mobile" size={16} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <p>App Development</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <div className="card-icon-2 web d-flex justify-content-center">
                                        <MdOutlineWebAsset className="color-web" size={16} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <p>Web Design</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <div className="card-icon-2 drone d-flex justify-content-center">
                                        <TbDrone className="color-drone" size={16} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <p>Creative Project</p>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-3">
                                    <div className="card-icon-2 marketing d-flex justify-content-center">
                                        <FaBriefcase className="color-marketing" size={16} />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <p>Marketing & Sales</p>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;