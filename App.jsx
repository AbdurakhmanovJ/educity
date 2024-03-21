import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Programs from "./Components/Programs"
import Title from "./Components/Title"
import About from "./Components/About"
import Compos from "./Components/Compos"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"
import VideoPlayer from "./Components/VideoPlayer"
import { useState } from "react"
function App() {
  const [playState, setPlayState] = useState(false);
  return (
    <>
    <Navbar />
    <Hero />
    <div className="container">
       <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <Title subTitle='GALLERY' title='Campus Photos'/>
      <Compos />
      <Title subTitle='CONTACT US' title='Get in Touch'/>
      <Contact/>
      <Footer/>
    </div>
    <>
    <VideoPlayer playState = {playState} setPlayState = {setPlayState}/>
    </>
    </>
  )
}

export default App
