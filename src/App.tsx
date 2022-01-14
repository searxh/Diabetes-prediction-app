import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Questions from './Pages/Questions';
import Navigation from './Components/Navigation/NavigationBar';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Questions" element={<Questions/>}/>
      </Routes>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
