import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Detail from './components/Detail';
import Hero from './components/Hero';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/home" element={<Hero />} />
          <Route exact path="/" element={<Hero />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
