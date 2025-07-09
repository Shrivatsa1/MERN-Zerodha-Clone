import React from 'react';
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const ProductSection = () => {
  return (
    <div className='container p-5 border-top'>
         <LeftSection imgSource="media/kite.png" heading="Kite" text="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." link1="Try demo" link2="Learn more" logo1="media/googlePlayBadge.svg" logo2="media/appstoreBadge.svg" />
            <RightSection imgSource="media/console.png" heading="Console" text="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." link1="Learn more"  />
            <LeftSection imgSource="media/coin.png" heading="Coin" text="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." link1="Coin" logo1="media/googlePlayBadge.svg" logo2="media/appstoreBadge.svg" />
            <RightSection imgSource="media/kiteconnect.png" heading="Kite Connect API" text="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." link1="Kite Connect"  />
            <LeftSection imgSource="media/varsity.png" heading="Varsity mobile" text="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."  logo1="media/googlePlayBadge.svg" logo2="media/appstoreBadge.svg" />
            <h4 className='text-muted text-center mt-5 mb-3'>Want to know more about our technology stack? Check out the <a className='text-decoration-none'>Zerodha.tech</a> blog.</h4>
    </div>
  )
}

export default ProductSection