import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/navigationbar';
import Teams from '../pages/Teams';
import Today from '../pages/Today';
import Players from '../pages/Player';
import Home from '../pages/Home';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Today" element={<Today />} />
        <Route path="/Player" element={<Players />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
