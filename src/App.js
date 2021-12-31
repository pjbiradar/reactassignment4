import './App.css';
import Home from './Components.js/Home';
import Students from './Components.js/Students';
import Contact from './Components.js/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components.js/Header';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <Router>
        <Header/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/students' element={<Students/>}/>
            <Route path='/contact' element={<Contact/>}/>
            



          </Routes>

        </Router>

       


      </div>
      
    </div>
  );
}

export default App;
