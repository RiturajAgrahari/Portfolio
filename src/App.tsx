import './App.css'
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
      <Projects></Projects>
      <MainPage></MainPage>
    </>
  )
}

export default App
