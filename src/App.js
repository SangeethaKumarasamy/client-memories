import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route,Navigate} from "react-router-dom";

import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth"; 
import PostDetails from './Components/PostDetails/PostDetails';
import Navbar from './Components/Navbar/Navbar';
import CreatorOrTag from "./Components/CreatorOrTag/CreatorOrTag"


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
  <Router>
    <Container maxWidth="lg">
      <Navbar />
      <Routes>
      <Route path="/" exact element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<Home/>}/>
        <Route path="/posts/search" element={<Home/>}/>
        <Route path="/posts/:id" element={<PostDetails/>}/>
        <Route path='/creators/:name'element={<CreatorOrTag/>} />
        <Route path='/tags/:name' element={<CreatorOrTag/>} />
        <Route path="/auth" element={(!user ? <Auth /> : <Navigate replace to="/posts" />)} />
      </Routes>
      
    </Container>
    </Router>
  );
};

export default App;
