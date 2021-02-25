import React from 'react'

function Footer() {
   return (
      <footer>
         <h1 className=" text-center">Talk To Us</h1>
         <p className='mt-3 text-muted footer-info text-center'>Maecenas pellentesque ante faucibus lectus vulputate sollicitudin. <br /> Cras feugiat hendrerit semper.</p>

         <div className="container mt-5">
            <div className="row">
               <div className="col-md-4">
                  <p className='first-p'>Keep in touch</p>
                  <p className='second-p mt-4'>110-220 Quisque diam odio, maximus ac consectetur eu, 10260
                  auctor non lorem</p>
                  <p className='second-p'>You are NOT allowed to re-distribute Softy Pinko template on any template collection websites. Thank you.</p>
               </div>
               <div className="col-md-8">
                  <form action="">
                     <div className="row  footer-input-header" >
                        <div className="col-md-3 container-input-1">
                           <input type="text" class="form-control first-input" placeholder="Full Name" aria-label="Username" aria-describedby="addon-wrapping" ></input>
                        </div>
                        <div className="col-md-3  ">
                           <input type="text" class="form-control second-input" placeholder="E-mail address" aria-label="Username" aria-describedby="addon-wrapping"></input>
                        </div>
                     </div>
                     <textarea class=" mt-3" placeholder="Your Message"></textarea>
                     <button className='form-btn mt-4 mb-5'>SEND MESSAGE</button>
                  </form>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
