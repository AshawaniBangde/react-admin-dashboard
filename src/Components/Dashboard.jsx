import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
    {/* Begin page */}
        <div id="layout-wrapper">
            
        <div className="main-content">
    <div className="page-content">
        <div className="container-fluid shadow-sm">
            
            <h3>Fees Creation</h3>

           
            <div className="card-fees">
                <div className="row mb-3">
                    <div className="col-md-12">
                        <label className="form-label">Name a Fees Creation</label>
                        <input type="text" className="form-control program-type" placeholder="Type something" />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <div className="input-with-icon">
                       <label className="form-label">Program Level</label>
                        <input type="text" className="form-control program-type" placeholder="Select" />
                       <img src="assets/images/users/Shape (1).png" alt="Program Level Icon" className="icon-inside-input" />
                       </div>
                    </div>
                    
                    <div className="col-md-6">
                    <div className="input-with-icon">
                        <label className="form-label">Program Type</label>
                        <input type="text" className="form-control program-type" placeholder="Select" />
                        <img src="assets/images/users/Shape (1).png" alt="Program Level Icon" className="icon-inside-input" />
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                    <div className="input-with-icon">
                        <label className="form-label">Program Name</label>
                        <input type="text" className="form-control program-type" placeholder="Select" />
                        <img src="assets/images/users/Shape (1).png" alt="Program Level Icon" className="icon-inside-input" />
                        </div>
                    </div>
                </div>
            </div>

           
                <h4 className="program">Program Run in Colleges</h4>
                    

                    <div class="row">
                            <div class="col-xl-3 col-md-6">
                               
                                <div class=" card-h-100">
                                    
                                    <div class="card-body college-card round-primer">
                                        <div class="row align-items-center">
                                            <div class="col-4">
                                                <button className="pending">Pending</button>
                                                <div class="image-container">
                                                <img src="assets/images/users/maki_college.png" alt="Help" class="mb-3" />
                                                
                                                </div>
                                               
                                            </div>

                                            <div class="col-7">
                                            <p className="college-name">College Name</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-xl-3 col-md-6">
                               
                                <div class=" card-h-100">
                                    
                                    <div class="card-body college-card round-circle" style={{ background: "#E6F0F6" }}>
                                        <div class="row align-items-center">
                                            <div class="col-4">
                                            <button className="pending">Pending</button>
                                                
                                                <div class="image-container" style={{ backgroundColor: "#3384B9" }}>
                                                <img src="assets/images/users/maki_college (1).png" alt="Help" class="mb-3" />
                                                
                                                </div>
                                               
                                            </div>

                                            <div class="col-7">
                                            <p className="college-name">College Name</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
        
                            <div class="col-xl-3 col-md-6">
                               
                                <div class=" card-h-100">
                                    
                                    <div class="card-body college-card round-pending">
                                        <div class="row align-items-center">
                                            <div class="col-4">
                                            <button className="pending">Pending</button>
                                                
                                                <div class="image-container">
                                                <img src="assets/images/users/maki_college.png" alt="Help" class="mb-3" />
                                                
                                                </div>
                                               
                                            </div>

                                            <div class="col-7">
                                            <p className="college-name">College Name</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
        
                             
                        </div>


                            
                             <h4 className="fees_details">Fees Details</h4>
                             <ul class="nav nav-pills nav-justified" role="tablist">
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link active" data-bs-toggle="tab"  role="tab">
                                                    
                                                    <span class=" d-sm-block home">Sem 1</span> 
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab"  role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 2</span> 
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab"  role="tab">
                                                  
                                                    <span class=" d-sm-block home1">Sem 3</span>   
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab" role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 4</span>    
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab" role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 5</span>    
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab" role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 6</span>    
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab" role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 7</span>    
                                                </Link>
                                            </li>
                                            <li class="nav-item waves-effect waves-light">
                                                <Link class="nav-link" data-bs-toggle="tab" role="tab">
                                                    
                                                    <span class=" d-sm-block home1">Sem 8</span>    
                                                </Link>
                                            </li>
                                        </ul>

                            <div className="row mt-3">
                                
                                
                            <div class="col-md-7 payment_text">
                                <label class="form-label fees_name mt-2">Select Fees Payment Templates</label>
                                <input type="number" class="form-control" placeholder="Select" />
                                

                                <div class="row mt-4">
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Name</label>
                                        <input type="text" class="form-control" placeholder="Default" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Amount</label>
                                        <input type="number" class="form-control" placeholder="NUM" />
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Name</label>
                                        <input type="text" class="form-control" placeholder="Default" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Amount</label>
                                        <input type="number" class="form-control" placeholder="NUM" />
                                    </div>
                                </div>

                                <div class="row mt-4">
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Name</label>
                                        <input type="text" class="form-control" placeholder="Default" />
                                    </div>
                                    <div class="col-md-6">
                                        <label class="form-label fees_name">Fees Amount</label>
                                        <input type="number" class="form-control" placeholder="NUM" />
                                    </div>
                                </div>
                                
                           </div>

             {/* Divider  */}
            <div class="col-md-1 d-flex justify-content-center align-items-center">
                <div class="divider"></div>
            </div>

            {/* Right Side: Total Fees Amount Section  */}
            <div class="col-md-4">
                <h5 class="to-fee">Total Fees Amount</h5>
                <div class="custom-card">
                            <div class="fees_amout">
                    <div class="top_header">
                        <div>No</div>
                        <div>Fees Name</div>
                        <div>Fees Amount</div>
                    </div>
                    <div class="menu-part">
                        <div className="tital">1</div>
                        <div className="tital">Tuition Fee</div>
                        <div className="tital new-totale">30,000</div>
                    </div>
                    <div class="menu-part">
                        <div className="tital">2</div>
                        <div className="tital">Lab Fee</div>
                        <div className="tital new-totale">10,000</div>
                    </div>
                    <div class="menu-part">
                        <div className="tital">3</div>
                        <div className="tital">Sports Fee</div>
                        <div className="tital new-totale">10,000</div>
                    </div>
                    
                </div>

                    <div class="d-flex justify-content-between align-items-center" style={{ marginTop: "8rem"}}>
                        <h6 class="text-primary amounfee">Total Fees Amount</h6>
                        <input type="text" class="numtotal" placeholder="NUM Total" />
                    </div>
                </div>
            </div>

                            </div>
                            
                            <div class="container">
        <div class="d-flex justify-content-end mt-5">
            <button class="next-btn">Next / Apply</button>
            <button class="cancle-btn">Cancel</button>
        </div>
    </div>
        </div>
    </div>
</div>

        </div>
        {/* END layout-wrapper */}
      
    </>
  )
}

export default Dashboard
