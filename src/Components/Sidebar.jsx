import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
     {/* ========== Left Sidebar Start ========== */}
     <div className="vertical-menu">

        <div data-simplebar className="h-100">

            {/*- Sidemenu */}
            <div id="sidebar-menu">
                {/* Left Menu Start */}
                <ul className="metismenu list-unstyled" id="side-menu">
                    

                    <li>
                        <Link to="/">
                        <img className="img-fluid" src="assets/images/users/ic_dashboard.png" alt="Help" />
                            <span data-key="t-dashboard">Dashboard</span>
                        </Link>
                    </li>


                    <li>
                    <Link to="/">
                    <img className="img-fluid" src="assets/images/users/Icon (1).png" alt="Help" />
                            <span data-key="t-dashboard">BOS</span>
                            </Link>
                    </li>

                    <li>
                    <Link to="/">
                    <img className="img-fluid" src="assets/images/users/a.png" alt="Help" />
                            <span data-key="t-dashboard">Program</span>
                            </Link>
                    </li>
                    <li>
                    <Link to="/">
                    <img className="img-fluid" src="assets/images/users/ic_account_box.png" alt="Help" />
                            <span data-key="t-dashboard">Fees Creation</span>
                            </Link>
                    </li>



                </ul>

            
            </div>
            {/* Sidebar */}
        </div>
    </div>
{/* Left Sidebar End */}
      
    </>
  )
}

export default Sidebar
