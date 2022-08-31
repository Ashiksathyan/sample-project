
import Home from './Component/Home';
import About from './Component/About';
import Navbar from './Component/Navbar';
import Collections from './Component/Collections';
import Contact from './Component/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Footer from './Component/Footer';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/collections' element={<Collections />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
      
    </div>
  );
}

export default App;
