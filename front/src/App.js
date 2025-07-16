import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import {API_URL} from "./index";

function App() {

const [products, setProducts] = useState([])


useEffect(()=>{
      getProducts()
  },[])

  const getProducts = (data)=>{
      axios.get(API_URL).then(data => setProducts(data.data))
  }
  return (
    <div className="App">


           {products.map (product => (
                    <tr key={product.pk}>
                        <td>{product.name}</td>

                  </tr>))}

    </div>
  );
}

export default App;
