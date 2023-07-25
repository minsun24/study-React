import React from "react";
import {Routes, Route, Link}  from "react-router-dom";  
import Button from '@mui/material/Button';
import '@fontsource/roboto/300.css'; //roboto 글꼴 사용
import DeleteIcon from '@mui/icons-material/Delete';  //삭제 쓰레기통 아이콘
import SendIcon from '@mui/icons-material/Send'; //send 아이콘

import Home from "./pages/Home"; 
import About from "./pages/About"; 
import Counter from "./pages/Counter"; 
import Input from "./pages/Input";   
import Input2 from "./pages/Input2";   
import Userlist from "./pages/List";   




function App() {
  return (
    <div className="App">
      <nav>
      <Button href="/" variant="text" color="primary">home</Button> 
      <Button href="/about" variant="contained" color="primary">about</Button> 
      <Button href="/counter" variant="outlined" color="primary">counter</Button> 
      <Button href="/input" variant="text" color="primary">input</Button> 
      <Button href="/input2" variant="contained" color="primary">input2</Button> 
      <Button href="/list" variant="outlined" color="primary">user list</Button> 
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/counter">Counter</Link> |
        <Link to="/input">Input</Link> | 
        <Link to="/input2">Input2</Link> | 
        <Link to="/list">User list</Link> 
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/input" element={<Input/>}></Route>
        <Route path="/input2" element={<Input2/>}></Route>
        <Route path="/list" element={<Userlist/>}></Route>
      </Routes>

      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
 
    </div>
  );
}



export default App;
