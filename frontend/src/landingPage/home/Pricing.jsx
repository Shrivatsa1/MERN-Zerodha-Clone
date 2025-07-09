const Pricing=()=>{
    return(
       <div className="container">
            <div className="row mt-5">
                <div className="col-4">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See pricing<i className="fa-solid fa-arrow-right-long p-3" style={{color: "#74C0FC"}}></i></a>

                </div>
                <div className="col-2"></div>
                <div className="col-6">
                    <div className="row text-center">
                        <div className="col border py-3">
                            <h1 >₹0</h1>
                            <p>Free equity delivery and <br/>direct mutual funds</p>
                        </div>
                        <div className="col border py-3">
                            <h1>₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>

       </div>
    )
}

export default Pricing;