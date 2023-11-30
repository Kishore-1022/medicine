import React from 'react'
import { useRef } from 'react'
import {v4 as uuidv4} from 'uuid'

const Input = () => {
    
    const name=useRef();
    const des=useRef();
    const price=useRef();

    const addHandler=async(e)=>{
        e.preventDefault()
        const itemId = uuidv4();
        const item={
            id:itemId,
            name :name.current.value,
            des:des.current.value,
            price:price.current.value
        }
        try {
            const res=await fetch('https://crudcrud.com/api/432ab9e0e6b7493b8faef2613caca2ac/med',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(item)
        })
        }catch(err){
            console.log(err.message)
        }
        e.target.reset()
    }
   



  return (
<div className="container mt-5">
    
    <form className="input-form d-flex gap-2" onSubmit={addHandler}>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input className="form-control" type="text" id="name" ref={name} />
        </div>
        <div className="form-group">
            <label htmlFor="description">Description</label>
            <input className="form-control" type="text" id="description" ref={des} />
        </div>
        <div className="form-group">
            <label htmlFor="price">Price</label>
            <input className="form-control" type="number" id="price" ref={price} />
        </div>
        <div>
            <br />
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </div>  
    </form>
</div>
);
};
export default Input