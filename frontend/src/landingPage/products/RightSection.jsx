import React from 'react'

const RightSection = ({imgSource,heading,text,link1}) => {
  return (
    <div className="container mt-5">
        <div className="row mt-5 d-flex align-items-center">
            
            <div className="col-5">
                <h1 className='m-3'>{heading}</h1>
                <p className='m-3'>{text}</p>
                <a href="#" className='m-3' style={{textDecoration:"none"}}>{link1}<i className="fa-solid fa-arrow-right-long " style={{color: "#74C0FC"}}></i></a>
                
                
                
            </div>
            <div className="col-7">
                <img src={imgSource} style={{width:"80%"}} alt="kite"/>
            </div>
        </div>
    </div>
  )
}

export default RightSection