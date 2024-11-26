import React from 'react'
import './OurSolutions.css'

const OurSolutions = () => {
  return (
    <div className='bimg2'>
      <div className="container-ofSolutions">
        <div className="solutions-content">
            <h2>Solutions</h2> <br />
            <p className='grid-para'>We are a software product development firm with 
            an objective to solve complex problems for our 
            customers.</p>
            <p className='grid-para'>We focus on Digital transformation, Industry 4.0 
            and IoT based solutions.</p>
            
        </div>
        <div className="solutions-grid-container">
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/1.webp" alt="solution-img1" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>Cloud Solutions</h3> <br />
                    <p className='grid-para'>Cloud Consulting, Data migration services, Backup and Disaster
                    Recovery Solutions.</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/2.webp" alt="solution-img1" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>UI/UX Design</h3> <br />
                    <p  className='grid-para'>Easy-to-use interfaces and high performance enterprise-grade code quality.</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/3.webp" alt="solution-img3" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>App Development</h3> <br />
                    <p  className='grid-para'>Your one stop solution for both Android & iPhone Apps.</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/4.webp" alt="solution-img4" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>Website Development</h3> <br />
                    <p  className='grid-para'>Custom, Dynamic and e-commerce web development solutions</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/5.webp" alt="solution-img5" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>IoT & IIoT Solutions</h3> <br />
                    <p  className='grid-para'>Connect your machines, devices, workers, facilities, and entire systems to the industrial IoT.</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
            <div className="solutions-grid-Box">
                <div className=" solutions-Box-img">
                    <img src="https://revaalolabs.com/images/solutions/6.webp" alt="solution-img6" />
                </div>
                <div className=" solutions-grid-content">
                    <h3>Digital Transformation</h3> <br />
                    <p  className='grid-para'>Optimize & Commercialize your business by using Digital Technologies</p> <br />
                    <button>
                        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> Home</a>
                    </button>
                </div>
            </div>
        </div>
        <button className='project-btn'>
        <a href="#"><i className='fa fa-angle-right' style={{ color: '#0A9BDE'}}></i> View Projects</a>
        </button>
      </div>
    </div>
  )
}

export default OurSolutions
