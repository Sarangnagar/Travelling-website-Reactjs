import React,{useEffect}from "react";
// import './main.css'
import './main.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img(12).jpg'
import img2 from '../../Assets/img(11).jpg'
import img3 from '../../Assets/img(10).jpg'
import img4 from '../../Assets/img(9).jpg'
import img5 from '../../Assets/img(8).jpg'
import img6 from '../../Assets/img(7).jpg'
import img7 from '../../Assets/img(6).jpg'
import img8 from '../../Assets/img(5).jpg'
import img9 from '../../Assets/img(4).jpg'
import Aos, { init } from 'aos';
import 'aos/dist/aos.css'

//Let me import 
// Let me paste the array named data

const Data=[
    { 
      id: 1,
      imgSrc: img,
      destTitle: 'changed',
      location: "Santorini",
      grade: "5-star",
      fees: "$2000 per night",
      description: "Experience the stunning beauty of the Aegean Sea in luxury at this exclusive resort in Santorini, Greece."
    },
    {
      id: 2,
      imgSrc: img2,
      destTitle: "Maui, Hawaii",
      location: "Maui",
      grade: "4-star",
      fees: "$1000 per night",
      description: "Relax in style at this tropical oasis in Maui, Hawaii, complete with ocean views and lush gardens."
    },
    {
      id: 3,
      imgSrc: img3,
      destTitle: "Bali, Indonesia",
      location: "Bali",
      grade: "5-star",
      fees: "$2500 per night",
      description: "Escape to paradise at this luxurious resort in Bali, Indonesia, where you can indulge in spa treatments and beachside cocktails."
    },
    {
      id: 4,
      imgSrc: img4,
      destTitle: "Paris, France",
      location: "Paris",
      grade: "4-star",
      fees: "$1500 per night",
      description: "Discover the romance and beauty of Paris from the comfort of this elegant hotel in the heart of the city."
    },
    {
      id: 5,
      imgSrc: img5,
      destTitle: "New York City, USA",
      location: "New York",
      grade: "5-star",
      fees: "$3000 per night",
      description: "Experience the energy and excitement of New York City from this luxurious hotel, located in the heart of Manhattan."
    },
    {
      id: 6,
      imgSrc: img6,
      destTitle: "Tokyo, Japan",
      location: "Tokyo",
      grade: "4-star",
      fees: "$1200 per night",
      description: "Immerse yourself in the culture and technology of Tokyo from this stylish hotel in the trendy Shibuya district."
    },
    {
      id: 7,
      imgSrc: img7,
      destTitle: "Dubai, UAE",
      location: "Dubai",
      grade: "5-star",
      fees: "$4000 per night",
      description: "Live like royalty at this luxurious resort in Dubai, complete with a private beach, gourmet dining, and butler service."
    },
    {
      id: 8,
      imgSrc: img8,
      destTitle: "Sydney, Australia",
      location: "Sydney",
      grade: "4-star",
      fees: "$900 per night",
      description: "Wake up to stunning views of the Sydney Opera House and Harbour Bridge from this chic hotel in the heart of the city."
    },
    {
      id: 9,
      imgSrc: img9,
      destTitle: "Amalfi Coast, Italy",
      location: "Amalfi",
      grade: "5-star",
      fees: "$2800 per night",
      description: "Indulge in la dolce vita at this luxurious villa on the Amalfi Coast, where you can bask in the sun and savor fresh Italian cuisine."
    }
]

const Main=()=>{
   //Lets Create a react hook to add a scroll animation .....
   useEffect(()=>{
    Aos.init({duration:2000})
      },{})



    return(
        <section className="main container section">

        <div className="secTitle">
            <h3 data-aos="fade-right" className="title">
                Most visited destinations
            </h3>
        </div>
        <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                    return( 
                        <div key={id} 
                        data-aos="fade-up"  className="singleDestination">
                            {
                                /*
                                Here it will return single id from the map array
                            */                            }
                            <div className="imageDiv">
                                <img src={imgSrc} alt={destTitle} />
                            </div>
                            <div className="cardInfo">
                                <h4 className="destTitle">{destTitle}
                                </h4>
                                <span className="continent flex">
                                    <HiOutlineLocationMarker class='icon'/>
                                    <span className="name">{location}</span>
                                </span>
                              <div className="fees flex">
                               <div className="grade">
                                <span>{grade}<small>+1</small></span>
                               </div>
                               <div className="price">
                                <h5>{fees}</h5>
                               </div>
                              </div>
                              <div className="desc">
                                <p>{description}</p>
                              </div>
                              <button className="btn flex">
                                DETAIlS <HiClipboardCheck className="icon"/>
                              </button>
                            </div>
                        </div>
                    )
                    

                })
            }

        </div>
        </section>
    )
}
export default Main