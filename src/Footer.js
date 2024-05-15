import React from 'react'

// import { FaInstagram,FaLinkedin,FaWhatsapp } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <footer>
     <div className="footer-outter">
        <div className="contact">
          <h4>Contact info</h4>
          <div className="icons">
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/sridar9771%40gamil.com?compose=CllgCJvkXPvkFSjDCWGWzwHBMdfXWJgkCvjncWRchQfZLJdZtjjVJHmvGgcfPTFwJJnJGBXGCqV"></a>
              {/* <AiOutlineMail className="icon" /> */}
            
            <a href="https://www.instagram.com/_dhar_sri/"></a> 
              {/* <FaInstagram className="icon" />       */}
            <a href="https://www.linkedin.com/in/sridar-m-37a1a1253/"></a>
              {/* <FaLinkedin className="icon" />  */}
               {/* <FaWhatsapp className="icon" />  */}
            </div>

        </div> 
        <div className="issue">
          <p>If you'r facing any bug or issue while using this site feel free to contact</p>
          <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#search/sridar9771%40gamil.com?compose=CllgCJvkXPvkFSjDCWGWzwHBMdfXWJgkCvjncWRchQfZLJdZtjjVJHmvGgcfPTFwJJnJGBXGCqV">sridar9771@gmail.com</a> 
        </div>
         
           
      </div>
    </footer>
  )
}

export default Footer