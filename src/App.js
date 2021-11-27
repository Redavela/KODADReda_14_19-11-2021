import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from './pages/Register';
import ListeEmployees from './pages/ListeEmployees';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/liste" element={<ListeEmployees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
