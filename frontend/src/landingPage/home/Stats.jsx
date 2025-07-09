const Stats=()=>{
    return(
       <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h1 className="pt-5 fs-2">Trust with confidence</h1>
                    <h3 className="pt-5 fs-4">Customer-first always</h3>
                    <p className="text-muted">That's why 13+ crore customers trust Zerodha with 3.5+ lakh crores worth of equity investments.</p>
                    <h3 className="pt-3 fs-4">No spam or gimmicks</h3>
                    <p className="text-muted">No gimmicks,spam,"gamification",or annoying push notifications .High quality apps that you use at your pace,the way you like.</p>
                    <h3 className="pt-3 fs-4">The Zerodha universe</h3>
                    <p className="text-muted">Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to you needs.</p>
                    <h3 className="pt-3 fs-4">Do better with money</h3>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch,we don't just facilitate transactions,but actively help you tdo better with your money.</p>
                </div>
                <div className="col-6">
                    <img src="media/ecosystem.png" alt="ecosystem" style={{width:"90%"}}/>
                    <div className="text-center">
                        <a href="#" style={{textDecoration:"none"}}>Explore our products<i className="fa-solid fa-arrow-right-long p-3" style={{color: "#74C0FC"}}></i></a>
                    <a href="#" style={{textDecoration:"none"}} className="m-5">Try kite</a>
                    </div>
                </div>
            </div>

       </div>
    )
}

export default Stats;