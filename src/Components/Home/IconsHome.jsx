import './IconsHome.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'font-awesome/css/font-awesome.min.css';


function IconsHome(){
    return <>
    <div className="icon-container">
        <div className="col-md1">
            <div className="icon-box">
                <div className="icon-box-cell">
                <i className="fa fa-user " ></i>
            
                </div>
                <div className="icon-box-cell">
                    <label htmlFor="">45</label>
                    <p>Happy customers</p>
                </div>
            </div>
        </div>
        <div className="col-md1">
            <div className="icon-box">
                <div className="icon-box-cell">
                    <i className="fa fa-tasks"></i>
                </div>
                <div className="icon-box-cell">
                    <label htmlFor="">84</label>
                    <p>Project delivered</p>
                </div>
            </div>
        </div>
        <div className="col-md1">
            <div className="icon-box">
                <div className="icon-box-cell">
                <i className="fa fa-calendar"></i>
                </div>
                <div className="icon-box-cell">
                    <label htmlFor="">5</label>
                    <p>Years of service</p>
                </div>
            </div>
        </div>
        <div className="col-md1">
            <div className="icon-box">
                <div className="icon-box-cell">
                <i className="fa fa-users"></i>
                </div>
                <div className="icon-box-cell">
                    <label htmlFor="">12</label>
                    <p>Strong team</p>
                </div>
            </div>
        </div>
    </div>
    </>
}
export default IconsHome