
import './App.css';
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ComponentsRender from './views/componentsRender.js';
import Footer from './components/Footer';
import Header from './components/Header';
import Children2 from './views/Children2';
import Children from './views/Children';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ComponentsRender />} />
          <Route path="/children" element={<Children />} />
          <Route path="/children2" element={<Children2 />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  </div>
  );
}

export default App;
