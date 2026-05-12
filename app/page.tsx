import Navbar from "./components/Navbar"
import HomeHero from "./components/HomeHero"
import SpecComp from "./components/SpecComp"
import UxComp from "./components/UxComp"
import PhasesComp from "./components/PhasesComp"
import CalculatorComp from "./components/CalculatorComp"
import Models from "./components/Models"
import Industries from "./components/Industries"
import Footer from "./components/Footer"


export default function Home(){
  return(
    <div>
      < Navbar/>
      < HomeHero/>
      < SpecComp/>
      < UxComp/>
      < PhasesComp/>
      < CalculatorComp/>
      < Models/>
      < Industries/>
      < Footer/>
 
    
    </div>
  )
}