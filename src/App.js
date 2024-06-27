import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import Contact from './components/pages/Contact';
import Safety from './components/pages/Safety';
import Vegmerkingar from './components/pages/Vegmerkingar';
import Vegleidarar from './components/pages/Vegleidarar';
import Stodvunardreglar from './components/pages/Stodvunardreglar';
import Gangbrautarkerfi from './components/pages/Gangbrautarkerfi';
import Thankyou from './components/pages/Thankyou';



function App() {
  return (
    <>
      <Router basename='/'>
        <Navbar />
        <Routes>
          <Route path='/' exact Component= {Main}/>
          <Route path='/safety' exact Component= {Safety}/>
          <Route path='/contact' exact Component= {Contact}/>
          <Route path='/vegmerkingar' exact Component= {Vegmerkingar}/>
          <Route path='/vegleidarar' exact Component= {Vegleidarar}/>
          <Route path='/stodvunardreglar' exact Component= {Stodvunardreglar}/>
          <Route path='/gangbrautarkerfi' exact Component= {Gangbrautarkerfi}/>
          <Route path='/thankyou' exact Component= {Thankyou}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
