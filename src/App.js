import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Pages/Home';
import { Contact } from './Pages/Contact';
import Blog from './Pages/Blog';
import { Error } from './Pages/Error';
import { Navbar } from './Components/Navbar';
import { Blog2 } from './Pages/Blog2';
import { AddBlog } from './Pages/AddBlog';
import { useState } from 'react';
import { ProtectedRoute } from './Pages/ProtectedRoute';
function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      {isLoggedin ? 
      <button type="" onClick={(e) =>{setIsLoggedIn(!isLoggedin)}}>Log out</button> : 
       <button type="" onClick={(e) =>{setIsLoggedIn(!isLoggedin)}}>Log in</button>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/addblog' element={<ProtectedRoute isLoggedin={isLoggedin}><AddBlog/></ProtectedRoute>}/>
        <Route path='/blog/' element={<Blog/>}/>
        <Route path='/blog/:name' element={<Blog2/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
