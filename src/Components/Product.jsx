import React, {useState, useEffect } from 'react'
import ProductInput from './ProductInput'
import ShowProducts from './ShowProducts';

export const Product = () => {

  const [data, setData] = useState([]);

  const addData = () => {
    var d = fetch("http://localhost:8000/products")
    .then(res => res.json())
    .then(res => setData(res));
  }

  useEffect( () => {
    async function effect() {
        await addData();
    };
    effect();
    console.log(data);
  }, [])

  return (
    <div>
        <ProductInput />
        <ShowProducts data={data} />
    </div>
  )
}
