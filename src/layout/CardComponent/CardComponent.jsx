import React from 'react'
import logo from '../../images/featured-item-01.png'

function CardComponent() {


   window.addEventListener('load', function () {
      const card = document.querySelectorAll('.card-comp')
      setTimeout(() => {
         for (let i = 0; i < card.length; i++) {
            card[i].classList.add('cardus')
         }
      }, 300)
   })
   return (
      <div className='container card-header-component yo'>
         <div className="row ">
            <div className="col-md-4 text-center">
               <div className="card card-comp pt-4 shadow p-3 mb-5 bg-white ">
                  <img src={logo} className="card-img-top img-thumbnail logos "></img>
                  <div className="card-body">
                     <h5 className="card-title">Modern Strategy</h5>
                     <p className="card-text text-muted text-black-50">Customize anything in this template to fit your website needs</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4 text-center">
               <div className="card card-comp pt-4 shadow p-3 mb-5 bg-white">
                  <img src={logo} className="card-img-top logos"></img>
                  <div className="card-body">
                     <h5 className="card-title">Best Relationship</h5>
                     <p className="card-text text-muted text-black-50">Contact us immediately if you have a question in mind</p>
                  </div>
               </div>
            </div>
            <div className="col-md-4 text-center">
               <div className="card card-comp pt-4 shadow p-3 mb-5 bg-white">
                  <img src={logo} className="card-img-top logos"></img>
                  <div className="card-body">
                     <h5 className="card-title">Ultimate Marketing</h5>
                     <p className="card-text text-muted text-black-50">You just need to tell your friends about our free templates</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CardComponent
