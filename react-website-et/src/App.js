import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact';
import Safety from './components/pages/Safety';
import Services from './components/pages/Services';
import Vegmerkingar from './components/pages/Vegmerkingar';
import Vegleidarar from './components/pages/Vegleidarar';
import Stodvunardreglar from './components/pages/Stodvunardreglar';
import Gangbrautarkerfi from './components/pages/Gangbrautarkerfi';



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
          <Route path='/vegmerkingar' exact Component= {Vegmerkingar}/>
          <Route path='/vegleidarar' exact Component= {Vegleidarar}/>
          <Route path='/stodvunardreglar' exact Component= {Stodvunardreglar}/>
          <Route path='/gangbrautarkerfi' exact Component= {Gangbrautarkerfi}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
