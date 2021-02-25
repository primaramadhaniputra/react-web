import React from 'react'
import logo from '../../images/left-image.png'
import logo2 from '../../images/right-image.png'


function Content() {
   return (
      <div className="container">
         <div className="row pl-5 pt-5">
            <div className="col-md-6 pl-5 pt-3">
               <img src={logo} alt="" />
            </div>
            <div className="col-md-6 pl-5 pt-3">
               <p className="paraghraph-content-header mt-5">
                  Let’s discuss about you project
               </p>
               <p className="paraghraph-content-info text-black-50">
                  Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper.
               </p>
            </div>
         </div>
         <hr className='divider-content' />
         <div className="row pl-5 pt-5 mb-5">
            <div className="col-md-6 pl-5 pt-3">
               <p className="paraghraph-content-header mt-5">
                  We can help you to grow your business
               </p>
               <p className="paraghraph-content-info text-black-50">
                  Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit.
               </p>
            </div>
            <div className="col-md-6 pl-5 pt-3 text-center mt-2">
               <img src={logo2} alt="" />
            </div>
         </div>
      </div>
   )
}


export default Content
