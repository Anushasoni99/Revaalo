import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import './ProcessBoxHome.css'

const ProcessBoxHome = () => {
  return (
    <div className='bimg1'>
      <div className="process-container">
        <div className="big-box">
            <div className="contant-box">
                <img src="https://revaalolabs.com/images/people-1.webp" alt="process-img" />
            </div>
            <div className="contant-box">
                <div className="contant">
                    <h1>Our Process</h1> <br />
                    <p>
                    Since our inception, we have committed ourselves to
                    help our customers succeed by digitally transforming 
                    them. We do this with exceptional Agile Software Development
                    processes and go-to-market product solutions. We live, breathe 
                    Agile and Extreme Programming, which are the industry best practices
                    for developing cutting-edge software. Furthermore, we push the limits 
                    of these best practices with our own innovations, hence becoming an 
                    industry benchmark ourselves.
                    </p>
                    <div className="listof-circle">
                        <div className="list-icon">
                            <i class="fa fa-circle-o"></i>
                            <label htmlFor="">Agile</label>
                        </div>
                        <div className="list-icon">
                            <i class="fa fa-circle-o"></i>
                            <label htmlFor="">Lean</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProcessBoxHome
