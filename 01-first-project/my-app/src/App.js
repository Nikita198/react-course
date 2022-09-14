import React from 'react'
import './App.css';
import Header from './components/Header';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import Profile from './components/Profile';


const App = () => {
  return (
   <div className='app-wrapper'>
    <Header />
    <Navbar />
    <Profile />
    <MainPage /> 
   </div>
  );
}

export default App;
