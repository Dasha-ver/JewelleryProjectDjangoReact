import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState, useEffect} from 'react';
import {API_URL} from "./index";

function App() {

const [products, setProducts] = useState([])


useEffect(()=>{
      getProducts()
  },[])

  const getProducts = ()=>{
      fetch(API_URL)
        .then(response => response.json())
        .then(data => setProducts(data))
        .catch(error => console.error('Error fetching products:', error));
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
