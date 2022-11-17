import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Rockets from './pages/Rockets';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
