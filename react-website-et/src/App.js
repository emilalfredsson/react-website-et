import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact';
import Safety from './components/pages/Safety';
import Services from './components/pages/Services';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component= {Main}/>
          <Route path='/services' exact Component= {Services}/>
          <Route path='/safety' exact Component= {Safety}/>
          <Route path='/contact' exact Component= {Contact}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
