import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loadable from '@loadable/component'

const Register = loadable(() => import('./pages/Register'))
const ListeEmployees = loadable(() => import('./pages/ListeEmployees'))
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/KODADReda_14_19-11-2021/" element={<Register />} />
          <Route path="/KODADReda_14_19-11-2021/liste" element={<ListeEmployees />} />
        </Routes>
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
