import React from 'react'

const data=[
    {
        imgSrc:"media/pricing0.svg",
        heading:"Free equity delivery",
        para:"All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage."
    },
    {
        imgSrc:"media/pricingEquity.svg",
        heading:"Intraday and F&O trades",
        para:"Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades."
    },
    {
        imgSrc:"media/pricingMF.svg",
        heading:"Free direct MF",
        para:"All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges."
    }
]
const PricingHero = () => {
  return (
    <div className='container'>
        <div className='text-center mt-5 p-5'>
            <h1>Charges</h1>
        <h4 className='text-muted mt-3'>List of all charges and taxes</h4>
        </div>
        <div className='row mt-5'>
            {
                data.map((data)=>{
                    return(
                        <div className='col-4  p-3'>
                            <img className='p-2' src={data.imgSrc} alt="PriceEquity" style={{width:"90%"}}/>
                            <h3 className='text-center m-2'>{data.heading}</h3>
                            <p className='mt-3'>{data.para}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default PricingHero