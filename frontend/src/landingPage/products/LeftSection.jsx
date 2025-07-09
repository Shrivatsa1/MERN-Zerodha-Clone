import React from 'react'

const LeftSection = ({imgSource,heading,text,logo1,logo2,link1,link2}) => {
  return (
    <div className="container mt-5">
        <div className="row mt-5 d-flex align-items-center">
            <div className="col-7">
                <img src={imgSource} style={{width:"80%"}} alt="kite"/>
            </div>
            <div className="col-5">
                <h1 className='m-3'>{heading}</h1>
                <p className='m-3'>{text}</p>
               {link1 && <a href="#" className='m-3' style={{textDecoration:"none"}}>{link1}<i className="fa-solid fa-arrow-right-long " style={{color: "#74C0FC"}}></i></a> }
                {link2 && <a href="#"  className='m-3 px-5' style={{textDecoration:"none"}}>{link2}<i className="fa-solid fa-arrow-right-long " style={{color: "#74C0FC"}}></i></a> }
                
                <br/>
                <img className='m-3' src={logo1} alt="playstore" />
                <img src={logo2} alt="appstore" />
            </div>
        </div>
    </div>
  )
}

export default LeftSection