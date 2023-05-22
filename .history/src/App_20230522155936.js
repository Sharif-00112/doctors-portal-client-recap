import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import About from './Pages/Home/About/About';
import Contact from './Pages/Home/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/home' element={<Home/>}/>
          <Route exact path = '/about' element={<About/>}/>
          <Route exact path = '/contact' element={<Contact/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;