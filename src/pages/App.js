import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NavigationBar from '../components/navigationbar';
import Teams from '../pages/Teams';
import Today from '../pages/Today';
import Players from '../pages/Player';
import Home from '../pages/Home';
import Article from './Article';
import News from './News';
import Awards from './Awards';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Today" element={<Today />} />
        <Route path="/Player" element={<Players />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/article" element={<Article />} />
        <Route path="/News" element={<News />} />
        <Route path="/Awards" element={<Awards />} />
      </Routes>
    </div>
  );
}

export default App;
