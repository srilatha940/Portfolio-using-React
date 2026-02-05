import About from "./Components/About"
import Contact from "./Components/Contact"
import Home from "./Components/Home"
import Projects from "./Components/Projects"
import SkillsAccordion from "./Components/SkillsAccordion"
// import SuccessPopup from "./Components/SuccessPopup"



function App() {

  return (
    <>
      <Home></Home>
      <About></About>
      
      <SkillsAccordion></SkillsAccordion>
      <Projects></Projects>
      <Contact></Contact>
      {/* <SuccessPopup></SuccessPopup> */}
    </>
  )
}

export default App
