import React from 'react'
import './about.css'
import ME from '../../assets/Profile Photo.png'
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { GiStarShuriken } from "react-icons/gi";


const About = () => {
  return (
    <section id='about'>
      <h2> About Me </h2>
      <div className='container about__container'>
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>
        <div className='about_description'>
          I am currently a 
          <b> Front-end Developer</b> at 
          <a href='https://spacelab.space' target='_blank'> Space Lab </a>
          , working with the front-end development team. 
          I also worked as a
          <b> Contract Designer</b> for   
          <a href='https://www.metaintro.com/' target='_blank'> Metaintro </a>
          where I redesigned newsletter onboarding experience, as well as social media media appearances.
          At the same time, I'm actively learning and enhancing my hard and soft skills.
          <p className='technologies'> Technologies that I have been working with: </p>
          <ul className='technologies_list'>
            <li> <GiStarShuriken className='icons'/>  React</li>
            <li> <GiStarShuriken className='icons'/>  React Native </li>
            <li> <GiStarShuriken className='icons'/>  HTML </li>
            <li> <GiStarShuriken className='icons'/>  CSS </li>
            <li> <GiStarShuriken className='icons'/>  Figma </li>
            <li> <GiStarShuriken className='icons'/>  Canva </li>
          </ul>
          Outside of work, I also enjoy weight-lifting, play video games, 
          along with collecting books and figurines.
         {/*  
         <div>
          <a href='#contact' className='btn btn-primary'> Let's Talk </a>
        </div>
         */}  
          </div>
      </div>
    </section>
  )
}

export default About