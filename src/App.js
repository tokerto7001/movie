import React from 'react';
import Main from './pages/Main';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import './App.css'

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
    </div>
  );
}
