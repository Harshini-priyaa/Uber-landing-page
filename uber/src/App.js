import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Suggestions from './components/Suggestions';
import Drive from './components/Drive';
import BusinessDrive from './components/BusinessDrive';
import RentCar from './components/RentCar';
import DownloadSection from './components/DownloadSection';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Suggestions/>
      <Drive/>
      <BusinessDrive/>
      <RentCar/>
      <DownloadSection/>
    </div>
  );
}

export default App;
