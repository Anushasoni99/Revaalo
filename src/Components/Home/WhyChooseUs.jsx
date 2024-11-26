import React from 'react'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <>
      <div className="why-container">
        <div className="why-flex-container">
            <div className="content-box1">
                <h1> <span>Why</span> Revaalo Labs?</h1>
                <p>Businesses today are looking for the swift transformation
                   of ideas into products. As a Software Product Engineering 
                   company, we understand this notion and are involved from 
                   product ideation through the phases of innovation, design,
                   development, testing, and deployment of software products.
                   Having served and delighted customers from a wide range of 
                   industries, we offer consulting services and technology 
                   partnerships to aid organizations to achieve their full 
                   potential.</p>
                   <div className='circle-list'>
                    <div>
                     <i class="fa fa-circle-o"></i>
                     <label htmlFor="">Flexible engagement models</label>
                    </div>
                    <div>
                     <i class="fa fa-circle-o"></i>
                     <label htmlFor="">End-to-end product development</label>
                    </div>
                   </div>
            </div>
            <div className="content-box">
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-code fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>Application Development</h3>
                            <p>MVP & Enterprise</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-cloud fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>Cloud Services</h3>
                            <p>Deployment & Hosting</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-desktop fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>Technology Consulting</h3>
                            <p>Software & Digital</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-mobile fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>Mobile Application</h3>
                            <p>Android & iOS</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-qrcode fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>IoT Development</h3>
                            <p>Digitalization and IIoT</p>
                        </div>
                    </div>
                 </div>
                 <div className="grid-container">
                    <div className="grid-box">
                        <div className="cell-icon">
                            <i className='fa-object-group fa '></i>
                        </div>
                        <div className="cell-icon">
                            <h3>User Interface</h3>
                            <p>UI & Frontend</p>
                        </div>
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default WhyChooseUs
