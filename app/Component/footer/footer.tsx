import Link from 'next/link'
import React from 'react';
import "@/app/style.css"
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaHome } from "react-icons/fa"


// Rest of your code...


const Footer = () => {
    return (
        <main className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'> 

            <section className="footer">
                <hr />
                <Link href="/about"><h4 className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'>About Us</h4></Link>
                <p><b>Blog</b> is your gateway to a world of knowledge and inspiration. Our mission is to empower you with insightful content that sparks curiosity and fuels your desire for continuous learning.
                    Join us on a journey of exploration, where we delve into diverse topics, share valuable insights, and foster a community passionate about knowledge.
                </p>
                <hr />
                <Link href="/contact"><h4 className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'>Contact Us</h4></Link>
                <div className="contact-us">
        
            <div className='contact-data'>
                <div>
                    <i className="fa fa-home"></i>
                    <span> 
                        <h5>Adress:</h5>
                        <p>Aminabad # 2 , Samnabad , Faisalabad, Punjab, PK</p>
                    </span>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <span>
                        <h5>Phone Number:</h5>
                        <p>+92 3079664615</p>
                    </span>
                </div> 
                <div>
                    <i className="fa fa-envelope"></i>
                    <span>
                        <h5>Email us:</h5>
                        <p>asimbutt9664@gmail</p>
                    </span>
                </div>
            </div>
            </div>
            <hr />
            <Link href="#"><h4 className='md:text-[14px] sm:text-[16px]  xl:text-[20px] 2xl:text-[26px]'>
                follow Us on</h4></Link>
               <div className="icons">
                    <Link href="https://www.facebook.com/profile.php?id=100036069652618&mibextid=ZbWKwL"><i className="fab fa-facebook-f"></i><FaFacebookF style={{ color: '#1877F2' }} /></Link>
                    <Link href="https://instagram.com/asimbutt3349?igshid=NGVhN2U2NjQ0Yg=="><i className="fab fa-instagram"></i><FaInstagram style={{ color: '#dd2a7b' }} /></Link>
                    <Link href="#"><i className="fab fa-twitter"></i><FaTwitter style={{ color: '#1DA1F2' }} /></Link>
                    <Link href="https://api.whatsapp.com/send?phone=923079664615"><i className="fab fa-whatsapp"></i><FaWhatsapp style={{ color: 'color: #075E54;' }} /></Link>
                     <Link href='https://www.linkedin.com/in/asim-butt-5b03182a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'> <i className="fab fa-linkedin"></i><FaLinkedin style={{ color: '#0077B5' }} /></Link>
                </div> 
                <p>Made with <i className="fas fa-heart"></i> by <a href="https://api.whatsapp.com/send?phone=923079664615">Asim Developer</a>
                </p>
                <p>Copyright © 2023 <a href="/">BLOG</a>. All Rights Reserved</p>
            </section> 
        </main>
    )
}

export default Footer