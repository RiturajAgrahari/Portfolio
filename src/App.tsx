import './App.css'
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import MainPage from './components/portfolio/portfolio'
import Projects from './components/projects/projects'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Projects></Projects>
      <MainPage></MainPage>
    </>
  )
}

export default App
