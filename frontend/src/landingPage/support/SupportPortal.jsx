import React from 'react'

const SupportPortal = () => {
    return (
        <div className='text-light' style={{ backgroundColor: "#387ed1", height: "30rem" }}>
            <div className="container">
                <div className="d-flex justify-content-between py-5">
                    <h4>Support Portal</h4>
                    <h5><a href="#" className='text-light'>Track Tickets</a></h5>
                </div>
                <div className="row mt-3">
                    <div className="col-7">
                        <h3>Search for an answer or browse help topics to create a ticket</h3>
                        <input type="text" className="form-control p-3 text-muted mt-4 mb-4" placeholder='Eg: how do i activate F&O,why is my order getting rejected...' aria-label="Sizing example input " aria-describedby="inputGroup-sizing-lg" />
                        {/* <i className="fa-solid fa-magnifying-glass"></i> */}
                        <div className='mt-3 mb-4'>
                            <a className='text-light fs-5 mt-5 p-4' href="#">Track account opening</a>
                            <a className='text-light fs-5  mt-5 p-4' href="#">Track segment activation</a>
                            <a className='text-light fs-5  mt-5 p-4' href="#">Intraday margins</a>
                            <br />
                            <a className='text-light fs-5  mt-5 p-4' href="#">Kite user manual</a>
                        </div>
                    </div>


                    <div className="col-5 px-5">
                        <h3>Featured</h3>
                        <p className='px-3 mt-4'>1. <a className='text-light' href="#">Adjustment of F&O contracts of PNB due to dividend</a></p>
                        <p className='px-3'>2. <a className='text-light' href="#">Rights Entitlements listing in June 2025</a></p>
                    </div>
                </div>
               
            </div>

        </div>
    )
}

export default SupportPortal