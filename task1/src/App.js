import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Home from './Components/Home';


const App = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  }

  const removeData = (index) => {
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
      <div className="App">
        <Header />
        <Home />
      </div>
  )
}

export default App
