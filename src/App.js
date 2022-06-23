import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Yia from './components/screens/Yia';

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Yia />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
