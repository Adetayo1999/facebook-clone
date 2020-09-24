import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar'
import Feed from  './feed'
function App() {
  return (
    <div className="App">
     <Header/>
     <div className="app-body">
       <Sidebar/>
       <Feed />
     </div>
    </div>
  );
}

export default App;
