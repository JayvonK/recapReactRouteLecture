import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePageComponent from './Components/Pages/HomePageComponent';

function App() {
  return (
    <BrowserRouter>
    {/* Wrapping our app in browser Router enables Routing */}

    <Routes>

      {/* Route defines our routes to different pages */}
      {/* '/' defines our homepage or the default rendering page */}
      <Route path='/' element={<HomePageComponent />}/>
    </Routes>

    </BrowserRouter>
  );
}

export default App;
