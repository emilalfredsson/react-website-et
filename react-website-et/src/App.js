import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/pages/Main';
import SignUp from './components/pages/SignUp';
import Products from './components/pages/Products';
import Services from './components/pages/Services';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component= {Main}/>
          <Route path='/services' exact Component= {Services}/>
          <Route path='/products' exact Component= {Products}/>
          <Route path='/sign-up' exact Component= {SignUp}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
