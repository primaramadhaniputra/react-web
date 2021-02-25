import React from 'react'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiRss } from 'react-icons/bi'
import { FiDribbble } from 'react-icons/fi'

function EndFooter() {
   return (
      <div className="container-icon">
         <div className='container pt-5' >
            <i className='icon mr-4 mb-4'> <FaFacebookF /></i>
            <i className='icon mr-4'><AiOutlineTwitter /></i>
            <i className='icon mr-4 '><FaLinkedinIn /></i>
            <i className='icon mr-4'><BiRss /></i>
            <i className='icon'><FiDribbble /></i>
            <hr />
            <p className='-5'>COPYRIGHT © 2020 DANI, CREDITS BY: SOFTY PINKO COMPANY- DESIGN: TEMPLATEMO</p>
         </div >
      </div>
   )
}

export default EndFooter
