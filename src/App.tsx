import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './screens';
// import "./styles/main.css"
import AppRoutes from './routes';
const App = () => {
  return (
    <div className="row">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
