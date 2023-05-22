import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/Home/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = '/' element={<Home/>}/>
          <Route exact path = '/home' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
