import './MainSectionHome.css'

 function MainSectionHome(){
    return <>
    <div className="container">
        <div className="main-content">
            <div className="main-headings">
               <h1 > <strong>
                Idea to Product in <span className="highlighted">12</span>
                 </strong>
               </h1>
               <h1>
                 <strong >
                    <span className="highlighted">Weeks</span>
                 </strong></h1>
                <p>Starting up is hard, lonely and scary! We at Revaalo Labs help such daring entrepreneurs & decision makers bring those products or business ideas out to the market.</p>
                <input type="button" value="Connect Now" />
           </div>
        </div>
        <div className="main-img">
            <img src="https://revaalolabs.com/images/gallery/mk-13.webp" alt="revaalolabs" />
        </div>
    </div>
    </>
}

export default MainSectionHome 