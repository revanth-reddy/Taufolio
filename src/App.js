import { useContext } from 'react'
import { 
  BrowserRouter,
  Routes,
  Route
 } from 'react-router-dom';
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
// import About from './components/About/About'
// import Projects from './components/Projects/Projects'
// import Skills from './components/Skills/Skills'
// import Contact from './components/Contact/Contact'
// import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Upload from './pages/Upload'
import './App.css'


const App = () => {
  const [{ themeName }] = useContext(ThemeContext)
  console.log("Hello")
  return (
    // <div id='top' className={`${themeName} app`}>
    //   <Header />
    
    //   {/* <Routes>
    //     <Route exact path='/' element={<Skills />}/>
    //     <Route exact path='/about' element={<About />}/>
    //     <Route exact path='/contact' element={<Contact />}/>
    //   </Routes> */}

    //   {/* <main>
    //     <About />
    //     <Projects />
    //     <Skills />
    //     <Contact />
    //   </main> */}

    //   <ScrollToTop />
    //   <Footer />
    // </div>
    <div id='top' className={`${themeName} app`}>
      <Header />
      <BrowserRouter basename="/taufolio">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
      {/* <ScrollToTop /> */}
      <Footer />
    </div>
  )
}

export default App
