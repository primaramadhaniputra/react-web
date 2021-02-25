import React, { useEffect } from 'react'
import logo from '../../images/logo.png'

function Navbar() {


   const changeColor = (e) => {
      const allColor = document.querySelectorAll(".nav-link")
      const array = [...allColor];
      array.map((a) => {
         if (a.classList.contains('nav-link-color')) {
            a.classList.remove('nav-link-color')
         } else {
            e.target.classList.add("nav-link-color")
         }
      })
   }

   // const navbar = document.querySelector('.container-navbar')
   // navbar.style.opacity = 0



   window.addEventListener('load', function () {
      const navbar = document.querySelector('.container-navbar')
      setTimeout(() => {
         navbar.style.opacity = 1
      }, 200)
   })

   return (
      <nav className="navbar navbar-expand-lg ">
         <div className="container pt-4 pb-4 mt-4 fixed-top container-navbar">
            <img src={logo} alt="" />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon">X</span>
            </button>
            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
               <div className="navbar-nav navbar-link ml-auto d-flex justify-content-between position-relative">
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Home</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>About</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Work Proccess</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Testimonials</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Pricing Tables</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Blog Entries</a>
                  <a className="nav-link" href="#" onClick={(e) => changeColor(e)}>Contact Us</a>
               </div>
            </div>
         </div>
      </nav >
   )
}

export default Navbar
