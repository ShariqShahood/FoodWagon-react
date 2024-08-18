import React from 'react'
// import guide1 from '../assets/guide1.png'

const Guide = () => {
    return (
        <center>
            <div className="container2 my-5">
                <h2 className='heading3D'>How does it work</h2><br /><br />
                <div className="row my-5 animate__animated animate__backInLeft">
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="myCard">
                            <div className="innerCard">
                                <div className="frontSide">
                                <i className="loc fa-solid fa-location-dot"></i>
                                <p>Select Location</p>
                                </div>
                                <div className="backSide">
                                    <p className="title" style={{color:'black'}}>Select Location</p>
                                    <p>Choose the location where your food will be delivered</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="myCard">
                            <div className="innerCard">
                                <div className="frontSide">
                                <i className="loc fa-solid fa-bell"></i>
                                    <p>Choose order</p>
                                </div>
                                <div className="backSide">
                                    <p className="title" style={{color:'black'}}>Choose order</p>
                                    <p>Check over hundreds of menus to pick your favorite food</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="myCard">
                            <div className="innerCard">
                                <div className="frontSide">
                                <i className="loc fa-solid fa-dollar-sign"></i>
                                    <p>Pay advanced</p>
                                </div>
                                <div className="backSide">
                                    <p className="title" style={{color:'black'}}>Pay advanced</p>
                                    <p>It's quick, safe, and simple.Select several methods of payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3">
                        <div className="myCard">
                            <div className="innerCard">
                                <div className="frontSide">
                                <i className="loc fa-solid fa-burger"></i>
                                    <p>Enjoy meals</p>
                                </div>
                                <div className="backSide">
                                    <p className="title" style={{color:'black'}}>Enjoy meals</p>
                                    <p>Food is made and delivered directly to your home</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </center>

    )
}

export default Guide
