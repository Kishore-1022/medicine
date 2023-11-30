import React from 'react'
import { useEffect, useState } from 'react'

const Cart = () => {
    const [cart,setCart]=useState([]);

  
 console.log(cart)
    const cartDetails= async()=>{   
       try{
        const res= await fetch('https://cart-3be72-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json')
        const data = await res.json();
        let obj=[]
        for(let i in data){
            const key=i
            obj.push({...data[i],key:key})
        }
        setCart(obj)
       }catch(err){
        console.log(err)
       }
    }
    useEffect(()=>{
        cartDetails()
    },[]);
  return (
    
     <>
        {cart.map((item) => (
        <div key={item._id}>
          <div>{item.name}</div>
          
        </div>
      ))}
    </>
        
      
   
  )
}

export default Cart
