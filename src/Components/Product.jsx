import React, {useState, useEffect } from 'react'
import styled from 'styled-components';
import ProductInput from './ProductInput'
import ShowProducts from './ShowProducts';

export const Product = () => {

  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  console.log(data.length);
  console.log(data);

  const addData = () => {
    var d = fetch(`http://localhost:8000/products?_page=${page}&&_limit=2`)
    .then(res => res.json())
    .then(res => setData(res));
  }

  useEffect( () => {
    async function effect() {
        await addData();
    };
    effect();
    console.log(data);
  }, [page])

  const Button = styled.button`
    color: red;
  `;

  return (
    <div>
        <ProductInput />
        <ShowProducts data={data} />
        <Button onClick={() => setPage(page+1)} >Next</Button>
        <Button>{page}</Button>
        {
            page === 1 ? <Button disabled>Previous</Button> : <Button page={page}  onClick={() => setPage(page-1)}>Previous</Button>
        }
        
    </div>
  )
}
