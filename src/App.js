import "./App.css";
import { Route, Routes} from 'react-router-dom';
import Header from "./components/Hearder/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import FirstYear from "./components/subjects/FirstYear/FirstYear";
import Footer from "./components/Footer/Footer";
import Years from "./components/subjects/Years";
import Auto from "./components/subjects/Automobile/Automobile";
import Comp from './components/subjects/Computer/Computer';
import Mech from './components/subjects/Mechanical/Mechanical';
import Entc from './components/subjects/Entc/Entc';
import About from './components/About/About';
import ForPracticles from "./components/ForPracticles/ForPracticles";

import { Branches } from './components/LandingPage/LandingPage';

import Resources from "./components/subjects/Resources";

function App() {

  const ComingPage = () => {
    return(
      <div className="imgdiv">
        <img className='imgSoon' src="https://drive.google.com/uc?export=view&id=1sg6WZ_Q0MkfnFN2W_51t4zqjgRtwjjMa" alt="coming soon" />
      </div>
    )
  }
    
  return (
    <div className="App">
      <Header />
      
      
        <Routes>
          <Route path='/' element={ <LandingPage />} />
          
          <Route exact path='/first-year' element={ <FirstYear />} />
          
          {
            Branches.map((data)=>(
              <Route exact path={`/${data.id}`} key={'1'+data.id} element={<Years />} />
            ))
          } 
            <Route path='/automobile/:id' element={<Auto/>} />
            <Route path='/computer/:id' element={<Comp/>} />
            <Route path='/mechanical/:id' element={<Mech/>} />
            <Route path='/entc/:id' element={<Entc />} />
            
            <Route path='/practicles' element={<ForPracticles />} />


            <Route path='/About' element={<About />} />


            <Route path='/notes/:id' element={<Resources />} />

            <Route path='/coming-soon' element={<ComingPage />} />

          
        </Routes>

      
     

      <Footer />
    </div>
  );
}

export default App;
