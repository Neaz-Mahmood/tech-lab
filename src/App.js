import React, { useState } from 'react';
import data from './Data/data.json';
import './App.css';
import { useEffect } from 'react';
import Course from './Components/Course/Course';
import Cart from './Components/Cart/Cart';

function App() {
  const [course, setCourse] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() =>{
    setCourse(data);
  }, [])
  const enrollButton =(enrolled) =>{
    const newCart = [...cart, enrolled];
    setCart(newCart);
  }
  return (
    <div className="App">
    <h1 id="header">Tech-LAB</h1>
     <div className="body">
     <ul>
       {course.map(data =>
       <Course course={data} enrollButton={enrollButton}></Course>
       )}
     </ul>
     <Cart cart={cart}></Cart>
     </div>
    </div>
  );
}

export default App;
