import './App.css';

// PAGES
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Details from './Pages/Details';

// PACKAGES
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

// COMPONENTS
import Logo from './Components/logo';
import Nav from './Components/nav';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header>
        <Logo />
        <Nav />
      </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/:id' element={<Details />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
