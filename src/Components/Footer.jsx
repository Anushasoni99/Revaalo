import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="upper-box">
          <div className='footer-logo'>
          <img class="footer-logo-img" src="https://revaalolabs.com/images/logo.webp" alt="logo" />
          </div>
          <div className='upper-details'>
            <p>80ft Road, JP Nagar 1st Phase, Bengaluru, India</p>
            <div className='tag-row'>
              <span>info@revaalo.in</span>
              <span>+91-9739979273 / 9686192094 </span>
            </div>
            <div className="footer-icons">
              <a href="#">
                <i className='fa fa-facebook text-xs circle'></i>
              </a>
              <a href="#">
                <i className='fa fa-twitter text-xs circle'></i>
              </a>
              <a href="#">
                <i className='fa fa-linkedin text-xs circle'></i>
              </a>
              <a href="#">
                <i className='fa fa-google text-xs circle'></i>
              </a>
            </div>
          </div>
          <div className='consitions'> 
            <a href="#">Terms & conditions</a>
          </div>
        </div>
        <div className="lower-box">
          <div className='copy-row'>© 2024 Revaalo Labs Private Limited</div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Footer
