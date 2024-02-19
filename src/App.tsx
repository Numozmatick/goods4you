import React from 'react';
import './App.css';
import HomePage from "./pages/home/ui/homePage/homePage";
import MobileMenu from "./shared/ui/organisms/mobileMenu";

function App() {
  return (
    <div className="App">
      <HomePage/>
        <MobileMenu />
    </div>
  );
}

export default App;
