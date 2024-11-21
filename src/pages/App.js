import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/navigationbar';
import Teams from '../pages/Teams';
import Today from '../pages/Today'

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Today" element={<Today />} />
      </Routes>
    </div>
  );
}

export default App;
