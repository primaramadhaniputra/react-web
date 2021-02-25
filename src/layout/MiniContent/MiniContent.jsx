import React from 'react'
import roket from '../../images/work-process-item-01.png'

function MiniContent() {
   return (
      <div className="container-mini-content">
         <div className="container">
            <p className="mini-content-header-paraghraph text-center">Work Process</p>
            <p className="mini-content-info-paraghraph text-center">Aenean nec tempor metus. Maecenas ligula dolor, commodo in imperdiet <br /> interdum, vehicula ut ex. Donec ante diam.</p>

            <div className="row pt-5 pb-5">
               <div className="col-md-2">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-2 card-minis">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-2">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-2">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-2">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
               <div className="col-md-2">
                  <div class="card card-mini " >
                     <img src={roket} class=" mx-auto pt-4 img-mini"></img>
                     <div class="card-body">
                        <p className='p-mini-content text-center'>Get Ideas</p>
                        <p className='p-mini-content-info text-center text-black-50'>Godard pabst prism fam cliche.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MiniContent
