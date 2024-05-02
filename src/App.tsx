import './App.css'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'
import Testimonial from './components/testimonials/testimonial'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Experience></Experience>
      <Testimonial></Testimonial>
      <Projects></Projects>
      <Contact></Contact>
    </>
  )
}

export default App
