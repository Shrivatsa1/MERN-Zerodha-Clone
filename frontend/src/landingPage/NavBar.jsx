import {Link} from "react-router-dom";
const NavBar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg bg-body-white border-bottom ">
                <div className="container py-3 flex-between ">
                    <Link className="navbar-brand " to="/"><img src="media/logo.svg" style={{width:"30%"}} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                        
                        <form className="">
                           <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/product">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/pricing">Pricing</Link>
                            </li>
                             <li className="nav-item">
                                <Link className="nav-link active" to="/support">Support</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#"><span className="navbar-toggler-icon"></span></a>
                            </li>
                           
                            
                        </ul>
                        </form>
                    </div>
                </div>
            </nav>
        
    )
}

export default NavBar;