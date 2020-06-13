import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Menu from './components/menu_component';
import Header from './components/header_component';
import Content from './components/content_component';
import Footer from './components/footer_component';

function App() {
  return (
    <div className="App">
            
      <div className = "Header">
      <Header/>
      </div>

      <div className = "Menu">
      <Menu/>
      </div>
          
      <div className ="Content">
      <Content/>
      </div>

      <div className = "Footer">
      <Footer/> 
      </div>
           
    </div>
  );
}

export default App;
