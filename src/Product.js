import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

const Product = () => {
  const [productItem, setProductItem] = useState([]);
  const optionRefs = useRef([]);
 
 

  const products = async () => {
    try {
      const res = await fetch('https://crudcrud.com/api/432ab9e0e6b7493b8faef2613caca2ac/med');
      const data = await res.json();
      setProductItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    products();
  }, []);
 

  const addHandler =async(e,id,index) => {
    e.preventDefault();
    const quantity = +optionRefs.current[index].value;
    const cart = productItem.map((item) =>
      item._id === id && { ...item, quantity } 
    );
    const updatedCart=cart.find(i=>i!==false)

    try {
        const res = await fetch('https://cart-3be72-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
          method: 'POST',
          body: JSON.stringify(updatedCart),
          headers: { 'Content-Type': 'application/json'}, 
        });
       
      } catch (err) {
        console.error( err.message);
      }
    optionRefs.current[index].value = ''; 
  };

  return (
    <>
      {productItem && productItem.map((item,index) => (
        <div className='d-flex gap-2' key={item._id}>
          <div>{item.name}</div>
          <div>{item.des}</div>
          <div>{item.price}</div>
          <div>
            <select id="dropdown" ref={(e)=>(optionRefs.current[index] = e)} defaultValue="">
              <option value="" disabled hidden>
                Quantity
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <Button onClick={(e) => addHandler(e, item._id,index)} size='sm'>
            Add to Cart
          </Button>
        </div>
      ))}
    </>
  );
};

export default Product;
