import './App.css'
import Experience from './components/experience/experience'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import MainPage from './components/portfolio/portfolio'
import Projects from './components/projects/projects'
import Skills from './components/skills/skills'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <MainPage></MainPage>
    </>
  )
}

export default App
