const Team = () => {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <h1 className="text-center">People</h1>
            </div>
            <div className="row">
                <div className="col-6 text-center text-muted">
                    <img src="media/nithinKamath.jpg" alt="founder" style={{ width: "50%", borderRadius: "100%" }} />
                    <h5 className="m-3">Nithin Kamath</h5>
                    <h6>Founder,Ceo</h6>
                </div>
                <div className="col-6 p-5">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p>Playing basketball is his zen.

                        Connect on <a className="text-decoration-none" href="">Homepage</a> /  <a className="text-decoration-none" href="">TradingQnA</a> / <a className="text-decoration-none" href="">Twitter</a> </p>
                </div>
            </div>

        </div>
    )
}

export default Team;