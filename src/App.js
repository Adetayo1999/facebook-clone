import React from 'react';
import './App.css';
import Header from './header';
import Sidebar from './sidebar'
import Feed from  './feed'
import Widjets from './widjets';
import Login from './login'
import { useStateValue } from './StateProvider';
function App() {
const [{user}, dispatch] = useStateValue();
  return (
    <div className="App">

    {!user ?(<Login/>) : (
       <> 
        <Header/>
        <div className="app-body">
          <Sidebar/>
          <Feed />
          <Widjets />
        </div>
       </>
      )}
      </div>

   
  );
}

export default App;
