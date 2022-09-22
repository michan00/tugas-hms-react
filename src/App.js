import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Carousel from './components/Carousel'; 

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return  (
    <div>
      <Router> 
        <Header /> 
        <Footer />  
        <Carousel /> 
      </Router>      
    </div>
  )
}



export default App;
