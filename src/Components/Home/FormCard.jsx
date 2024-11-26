import React from 'react'
import './FormCard.css'

const FormCard = () => {
  return (
    <div className='bimg3'>
      <div className="card-container">
        <div className="form-card">
            <div className="form-content">
                <form action="">
                    <div className="form-flex">
                        <div>
                            <label htmlFor="">Name</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Email</label><br />
                            <input type="text" />
                        </div>
                    </div>
                    <label htmlFor="">Phone</label>
                    <input className='for-phone' type="text" />
                    <label htmlFor="">Message</label><br />
                    <textarea name="" id=""></textarea>

                    <div class="form-group">
                        <button type="submit">
                            <i>&#x2709;</i> Send message
                        </button>
                    </div>
                </form>
            </div>
            <div className="form-content">
                <h1 className='small-text'>Contact us now and receive a free quotation for your project</h1>
                <div className="details-content">
                    <div>
                        <h4>Connect</h4> <br />
                        <p>labs@revaalo.in</p>
                        <p>+91-9739979273</p>
                        <p>+91-9686192094</p>
                    </div>
                    <div>
                        <h4>Office</h4><br />
                        <p>80ft Road</p>
                        <p>JP Nagar 1st Phase</p>
                        <p>Bengaluru, India</p>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default FormCard
