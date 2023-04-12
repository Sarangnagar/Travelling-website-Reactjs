import React,{useEffect} from "react";
// import './footer.css'
import './footer.scss'
import video2 from '../../Assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight } from 'react-icons/fi'
import Aos, { init } from 'aos';
import 'aos/dist/aos.css'

const Footer=()=>{

     //Lets Create a react hook to add a scroll animation .....
     useEffect(()=>{
        Aos.init({duration:2000})
 },{})



    return(
        <section className ='footer'>
           <div className="videoDiv">
            <video src={video2} loop autoPlay muted type ="video(2)/mp4"></video>
           </div>
           <div className="setContent container">
            <div data-aos="fade-up"  className="contactDiv flex">
                <div className="text">
                    <small>
                        KEEP IN TOUCH
                    </small>
                    <h2> Travel With Us</h2>
                </div>
                <div className="inputDiv flex">
                    <input data-aos="fade-up"  type="text" placeholder='Enter Email Address' />
                    <button data-aos="fade-up"  className='btn flex' type='submit'> SEND
                        <FiSend className="icon"/>
                    </button>
                </div>

            </div>
            <div className="footerCard flex">
                <div className="footerIntro flex">
                    <div className="logoDiv">
                        <a href="b" className='logo flex'>
                         <MdOutlineTravelExplore className="icon"/>   Travel.
                        </a>
                    </div>
                    <div data-aos="fade-up"  className="footerParagraph">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatum dolorem rem obcaecati distinctio ducimus provident ab adipisci iusto optio quam pariatur ipsam, cupiditate odit soluta, natus laborum amet sequi neque architecto?
                    </div>
               <div data-aos="fade-up"  className="footerSocials flex">
                <AiOutlineTwitter className ="icon"/>
                <AiFillYoutube className ="icon"/>
                <AiFillInstagram className ="icon"/>
                <FaTripadvisor className ="icon"/>
               </div>
                </div>
                
               <div className="footerLinks grid">
                {/* Group one by one */}
                <div data-aos="fade-up" 
                data-Aos-duration="3000"   className="linkGroup">
                    <span className="groupTitle">
                        OUR AGENCY
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Services

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Insurance

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Agency

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Tourism

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Payment

                    </li>
                    </div>
                     {/* Group TWO */}
                <div data-aos="fade-up" data-Aos-duration="4000"  className="linkGroup">
                    <span className="groupTitle">
                        PARTNERS
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Bookings

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Rentcars

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        HostelWorld

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Trivago

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        TripAdvisor

                    </li>
                    </div>
                     {/* Group Three */}
                <div data-aos="fade-up"
                data-Aos-duration="5000"  
                  className="linkGroup">
                    <span className="groupTitle">
                        LAST MINUTE
                    </span>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        London

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        California

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Indonesia

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Europe

                    </li>
                    <li className="footerList flex">
                        <FiChevronRight className="icon"/>
                        Ocenia

                    </li>
                    </div>
                    </div> 
                   <div className="footerDiv flex">
                    <small>BEST TRAVEL WEBSITE THEME</small>
                    <small>COPYRIGHTS RESERVED - ISRATECH</small>
                   </div>
            </div>
           </div>

        </section>
    )
}
export default Footer