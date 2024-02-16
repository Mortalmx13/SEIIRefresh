import{
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


import Navbar from './Components/navbar';
import Footer from './Components/footer';

import Home from './Pages/home';
import Recipes from './Pages/recipes';
import Settings from './Pages/settings';
import Login from "./Pages/login";
import Register from "./Pages/register";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        
      </div>
      <Footer />
    </Router>  
  );
}

export default App;
