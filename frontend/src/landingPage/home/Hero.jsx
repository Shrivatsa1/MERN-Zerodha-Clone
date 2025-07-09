import {useState,useEffect} from 'react';
import "../../index.css";
const Hero=()=>{
    const [isScrollingDown, setIsScrollingDown] = useState(false);
      const [lastScrollY, setLastScrollY] = useState(window.scrollY);
    
      useEffect(() => {
        const handleScroll = () => {
          const currentScrollY = window.scrollY;
          if (currentScrollY > lastScrollY) {
            setIsScrollingDown(true);
          } else {
            setIsScrollingDown(false);
          }
          setLastScrollY(currentScrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, [lastScrollY]);
    return(
        <div className="container p-3 mb-5">
            <div className="row text-center">
                <div className={`row mt-5 heroscroll ${isScrollingDown ? 'tilt-back' : 'tilt-forward'}`}>
                    <img src="media/homeHero.png" alt="hero" className="mb-5"/>
                    
                </div>
                
                    
                
                    
                
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="p-3 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}} >Sign up for free</button>
            </div>
        </div>
    )
}

export default Hero;