
import './Navbar.css'


function Navbar (){
    return <>
    <nav className="navbar">
        <div className="navbar-continer">
            <div className="logo">
                <img class="logo-img" src="https://revaalolabs.com/images/logo-black.webp" alt="logo" />
            </div>
            <div className="list " >
                <ul>
                    <li>Home</li>
                    <li>Solutions</li>
                    <li>About</li>
                    <li>Work</li>
                    <li>Technology</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </div>
    </nav>
    </> 
    
}
export default Navbar