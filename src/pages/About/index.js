import { React, useState } from 'react';
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const About = () => {
  const [name, setName] = useState("Tau")
  return (
    <>
    <div className='about center' style={{height: '280vh'}}>
      <h1>
        About <span className='about__name'>{name}.</span>
      </h1>
      
    </div>
    <ScrollToTop />
    </>
  )
}

export default About;
