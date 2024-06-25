
import './App.css';

import NavBar from './Components/Common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path = "/" element={<Home />} />
        <Route path = "/recipes" element={<Recipes />} />
      </Routes>
    </Router>
  );
}

export default App;
