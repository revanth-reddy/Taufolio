import { React } from 'react';

import About from '../../components/About/About'
import Projects from '../../components/Projects/Projects'
import Skills from '../../components/Skills/Skills'
import Contact from '../../components/Contact/Contact'
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop'

const Home = () => {
  return (
    <div className='about center'>
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
    </div>
  )}


export default Home;
