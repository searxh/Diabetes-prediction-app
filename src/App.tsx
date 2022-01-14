import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import Questions from './Pages/Questions';
import NavigationBar from './Components/Navigation/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Questions" element={<Questions/>}/>
      </Routes>
    </div>
  );
}

export default App;
