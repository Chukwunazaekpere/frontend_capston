import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import "./styles/main.css"
import AppRoutes from './routes';
const App = () => {
  return (
    <div className="container">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
