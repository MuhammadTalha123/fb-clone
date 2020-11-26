import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from "./Feed";
import Widgets from "./Widgets";

function App() {
  const user = "Talha";
  return (
    <div className="app">
    {!user ? ( 
      <h1>LogIn</h1> 
    ) : (
      <>
      <Header />


        <div className="app__body">
           <Sidebar /> 
            <Feed />  
            <Widgets />     
          </div>
      </>
    )}
      
    </div>
  );
}

export default App;
