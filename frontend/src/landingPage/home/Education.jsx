const Education=()=>{
    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/education.svg" alt="education" style={{width:"80%"}} />
                </div>
                <div className="col-6 py-3">
                    <h1 className="mt-3 mb-2 fs-2">Free and open market education</h1>

                    <div className="mt-5">
                        <p>
                        Varsity the largest online stock market education block in the world covering everything from the basic to advanced trading
                        </p>
                        <a href="#" style={{textDecoration:"none"}}>Versity<i className="fa-solid fa-arrow-right-long " style={{color: "#74C0FC"}}></i></a>
                    </div>
                    <div className="mt-5">
                        <p>
                            Tradig Q&A,the most active trading and investment community in India for all your market related queries.
                        </p>
                        <a href="#" style={{textDecoration:"none"}}>Trading Q&A<i className="fa-solid fa-arrow-right-long " style={{color: "#74C0FC"}}></i></a> 
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education;