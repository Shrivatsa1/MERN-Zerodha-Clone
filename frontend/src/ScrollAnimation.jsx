import React from 'react';
import {useState,useEffect} from 'react';
import './ScrollBox.css';

const ScrollAnimation = () => {
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

  return (
    <div className="container">
      <div className={`box ${isScrollingDown ? 'tilt-back' : 'tilt-forward'}`}>
        Scroll Me
      </div>
      <div className="spacer" />
    </div>
  );
}

export default ScrollAnimation