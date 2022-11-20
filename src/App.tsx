import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Dashboard from './screens/Dashboard';

function App() {
  return (
    <div className="w-full  md:w-2/6 flex justify-center items-center  p-0 m-0">
      <Dashboard />
    </div>
  );
}

export default App;
