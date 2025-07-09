import React from 'react';

const dataApi=[
    {
        imgSrc:"media/zerodhaFundhouse.png",
        text:"Our asset management venture that is creating simple and transparent indexfunds to help you save for your goals."
    },
    {
        imgSrc:"media/sensibullLogo.svg",
        text:"Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
    },
    {
        imgSrc:"media/tijori.svg",
        text:"Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
    },
    {
        imgSrc:"media/streakLogo.png",
        text:"Systematic trading platform that allows you to create and backtest strategies without coding."
    },
    {
        imgSrc:"media/smallcaseLogo.png",
        text:"Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
    },
    {
        imgSrc:"media/dittoLogo.png",
        text:"Personalized advice on life and health insurance. No spam and no mis-selling."
    }
]

const Universe = () => {
  return (
    <div className="container text-center mt-5">
        <h2>The Zerodha Universe</h2>
        <p className='text-muted fs-4 mt-3'>Extend your traiding and investment experience even further with our partner platforms</p>
        <div className='row mt-5'>
        {
            dataApi.map((data)=>{
                return(
                    
                        <div className="col-4">
                            <img src={data.imgSrc} style={{width:"60%"}} className='mb-3 p-3' alt="" />
                            <p className='text-muted text-small bg-grey'>{data.text}</p>
                        </div>
                        
                   
                )
            })
        }
         </div>
         <button className="p-2 btn btn-primary fs-5 mt-5 text-center" style={{width:"20%",margin:"0 auto"}} >Sign up for free</button>
    </div>
  )
}

export default Universe