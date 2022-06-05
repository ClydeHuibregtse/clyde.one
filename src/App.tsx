import React from 'react';
import logo from './logo.svg';

import NavBar from './navigation/NavBar'
import MainScene from './three-render/MainScene'

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <p className="text-3xl text-gray-700 font-bold mb-5">
          Welcome!
        </p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
        <MainScene />
      </div>
    </div>
  );
}
export default App;