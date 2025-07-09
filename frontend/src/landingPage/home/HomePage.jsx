import Footer from "../Footer";
import NavBar from "../NavBar";
import OpenAccount from "../OpenAccount";
import Awards from "./Awards"
import Education from "./Education";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";

const HomePage=()=>{
    return(
        <>
        {/* <NavBar /> */}
        <Hero />
        <Awards />
        <Stats />
        <Pricing />
        <Education />
        <OpenAccount />
        {/* <Footer /> */}
        </>
    )
}

export default HomePage;