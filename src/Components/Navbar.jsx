import React from 'react'


const Navbar = () => {
  return (
    <>
      <header id="page-topbar">
                <div className="navbar-header">
                    <div className="d-flex">
                        {/* LOGO */}
                        <div className="navbar-brand-box">
                           
                        </div>

                        <div className="d-flex align-items-center">
                                {/* Menu Button (Sidebar Toggle) */}
                                <button
                                    type="button"
                                    className="btn btn-sm px-3 font-size-16 header-item"
                                    id="vertical-menu-btn"
                                >
                                    <i className="fa fa-fw fa-bars"></i>
                                </button>

                                {/* Search Bar */}
                                <form className="app-search d-none d-lg-block ms-3">
                                <div className="search-container position-relative custom-width">
                                <img className="img-fluid" src="assets/images/users/Shape (2).png" alt="Help" />
                                    {/* <i className="bx bx-search-alt search-icon"></i> */}
                                    <input
                                    type="text"
                                    className="form-control search-input"
                                    placeholder="Search..."
                                    />
                                </div>
                                </form>


                        </div>

                      
                    </div>
                    <div className="d-flex align-items-center gap-3">
                        {/* Help Icon */}
                        <div className="d-flex">
                            <img className="img-fluid" src="assets/images/users/ic_help.png" alt="Help" />
                        </div>

                        {/* Notification Bell */}
                        <div className="d-flex position-relative">
                            <img className="img-fluid" src="assets/images/users/Icon.png" alt="Notifications" />
                            
                        </div>

                            {/* User Profile Dropdown */}
                        <div className="dropdown d-inline-block">
                            <button
                            type="button"
                            className="btn header-item bg-light-subtle border-start border-end d-flex align-items-center"
                            id="page-header-user-dropdown"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                            >
                            <img
                                className="rounded-circle header-profile-user"
                                src="assets/images/users/admin.jpg"
                                alt="User Avatar"
                                width="35"
                                height="35"
                            />
                            <div className="ms-2 text-start">
                                <span className="fw-medium d-block admin-big">Aarohi Shah</span>
                                <span className="text-muted small d-block admin-small">Admin</span>
                            </div>
                            </button>

                            
                        </div>
                        </div>
                    </div>
            </header>
    </>
  )
}

export default Navbar
