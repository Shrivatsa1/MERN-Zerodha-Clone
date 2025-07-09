import React from 'react'

// const row1Data=[[
//   {
//     heading:"Account Opening",
//     linkData1:[
//       {
//         link1:"Resident individual",
//         link2:"Minor",
//         link3:"Non Resident Indian (NRI)",
//         link4:"Company, Partnership, HUF and LLP",
//         link5:"Glossary"
//       }
//     ]
//   }
// ],[{
//   heading:"Your Zerodha Account",
//   linkData2:[
//       {
//         link1:"Your Profile",
//         link2:"Account modification",
//         link3:"Client Master Report (CMR) and Depository Participant (DP)",
//         link4:"Nomination",
//         link5:"Transfer and conversion of securities"
//       }
//     ],
//     linkData3:[
//       {
//         link1:"Resident individual",
//         link2:"Minor",
//         link3:"Non Resident Indian (NRI)",
//         link4:"Company, Partnership, HUF and LLP",
//         link5:"Glossary"
//       }
//     ],
//     linkData4:[
//       {
//         link1:"Resident individual",
//         link2:"Minor",
//         link3:"Non Resident Indian (NRI)",
//         link4:"Company, Partnership, HUF and LLP",
//         link5:"Glossary"
//       }
//     ],
//     linkData5:[
//       {
//         link1:"Resident individual",
//         link2:"Minor",
//         link3:"Non Resident Indian (NRI)",
//         link4:"Company, Partnership, HUF and LLP",
//         link5:"Glossary"
//       }
//     ],
//     linkData6:[
//       {
//         link1:"Resident individual",
//         link2:"Minor",
//         link3:"Non Resident Indian (NRI)",
//         link4:"Company, Partnership, HUF and LLP",
//         link5:"Glossary"
//       }
//     ]
//   }
// ]

const CreateTicket = () => {
  return (
    <div className='container mt-5'>
        <p className='text-muted fs-4'>To create a ticket,select a relevant topic</p>
        <div className="row mt-5">
            <div className="col-4">
                <h3 className='mb-4'>Account Opening</h3>
                <p><a className='text-decoration-none' href="#">Resident individual</a></p>
                <p><a className='text-decoration-none' href="#">Minor</a></p>
                <p><a className='text-decoration-none' href="#">Non Resident Indian (NRI)</a></p>
                <p><a className='text-decoration-none' href="#">Company, Partnership, HUF and LLP</a></p>
                <p><a className='text-decoration-none' href="#">Glossary</a></p>

            </div>
             <div className="col-4">
                <h3 className='mb-4'><i className="fa-light fa-circle-plus" style={{height:"10px"}}/>Your Zerodha Account</h3>
                <p><a className='text-decoration-none' href="#">Your Profile</a></p>
                <p><a className='text-decoration-none' href="#">Account modification</a></p>
                
                <p><a className='text-decoration-none' href="#">Client Master Report (CMR) and Depository Participant (DP)</a></p>
                <p><a className='text-decoration-none' href="#">Nomination</a></p>
                <p><a className='text-decoration-none' href="#">Transfer and conversion of securities</a></p>

            </div>
             <div className="col-4">
                <h3 className='mb-4'>Kite</h3>
                <p><a className='text-decoration-none' href="#">IPO</a></p>
                <p><a className='text-decoration-none' href="#">Trading FAQs</a></p>
                <p><a className='text-decoration-none' href="#">Margin Trading Facility (MTF) and Margins</a></p>
                <p><a className='text-decoration-none' href="#">Charts and orders</a></p>
                <p><a className='text-decoration-none' href="#">Alerts and Nudges</a></p>
                <p><a className='text-decoration-none' href="#">General</a></p>
                
            </div>
            <div className="row mt-5">
            <div className="col-4">
                <h3 className='mb-4'>Funds</h3>
                <p><a className='text-decoration-none' href="#">Add money</a></p>
                <p><a className='text-decoration-none' href="#">Withdraw moneyr</a></p>
                <p><a className='text-decoration-none' href="#">Add bank accounts</a></p>
                <p><a className='text-decoration-none' href="#">eMandates</a></p>
                

            </div>
             <div className="col-4">
                <h3 className='mb-4'>Console</h3>
                <p><a className='text-decoration-none' href="#">Portfolio</a></p>
                <p><a className='text-decoration-none' href="#">Corporate actions</a></p>
                
                <p><a className='text-decoration-none' href="#">Funds statement</a></p>
                <p><a className='text-decoration-none' href="#">Reports</a></p>
                <p><a className='text-decoration-none' href="#">Profile</a></p>
                <p><a className='text-decoration-none' href="#">Segments</a></p>

            </div>
             <div className="col-4">
                <h3 className='mb-4'> Coin</h3>
                <p><a className='text-decoration-none' href="#">Mutual funds</a></p>
                <p><a className='text-decoration-none' href="#">National Pension Scheme (NPS)</a></p>
                <p><a className='text-decoration-none' href="#">Features on Coin</a></p>
                <p><a className='text-decoration-none' href="#">Payments and Orders</a></p>
                <p><a className='text-decoration-none' href="#">General</a></p>
                
            </div>
        </div>
        </div>

    </div>
  )
}

export default CreateTicket