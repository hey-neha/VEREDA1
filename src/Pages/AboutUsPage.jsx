import React from 'react'
import Navbar from '../components/Aboutus/Navbar'
import Company from '../components/Home/Company'
import MapImagePage from '../components/Aboutus/MapImagePage';
import Hiring from '../components/Aboutus/Hiring';
import Contact from '../components/Aboutus/Contact';
const AboutUsPage = () => {
  return (
    <>
    <Navbar/>
    <Company/>
    <MapImagePage/>
    <Hiring/>
    <Contact/>
    </>
  )
}

export default AboutUsPage