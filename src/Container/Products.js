import React from "react";
import "../StyleSheet/Product.css";
import { BsFillCartCheckFill } from 'react-icons/bs';
import { GrFormSubtract } from 'react-icons/gr';
import {RiDeleteBin6Line} from 'react-icons/ri'

import {useState} from "react";


const Product = (props) =>{
    const [product,setProduct]=useState(props.myproduct)
    const heart = (item,id) =>{
        const copyProduct = [...product]
        copyProduct[id].cartCount++
        setProduct(copyProduct) 
    }
    const subtract = (item,id) =>{
        const copyProduct = [...product]
        if(item.cartCount>0){
        copyProduct[id].cartCount--
        setProduct(copyProduct) 
        }
    }
    const totalPrice = () =>{
        let sum = 0
        props.myproduct.map((item,id)=>{
           return sum= sum+(item.price*item.cartCount)
        })
        return sum
    }
    const Reset = () =>{
        const copyProduct = [...product]
       if( window.confirm("Are you sure you want to remove item from shoppin cart?")===true){
        props.myproduct.map((item,id)=>{
         item.cartCount=0
       return  setProduct(copyProduct) 
        })
    }else{
        alert('you cancelled')
    }
    }
    const deleteItem = (item,id) =>{
        const copyProduct = [...product]
        copyProduct[id].cartCount=0
        setProduct(copyProduct) 
    }
    return(
        <>
        
        <div className='productinfo'>
        {
            props.myproduct.map((item,id)=>{
                return (
                <div className="redcontainer" style={{
                    backgroundColor: item.backgroundColor
                }} key={id}>
                <img src={item.image} height={100} width={100} alt={item.name} key={item.image}></img>
                <ul key={item.name}>
                <li key={item.name}>{item.name}   Nrs.{item.price}</li>
                 </ul>
                 <BsFillCartCheckFill style={{height:'50px',width:'50px'}}
                 onClick={()=>heart(item,id)}>
                 </BsFillCartCheckFill>
                </div>
                )
            })
        }
        </div>
        <div className="cart">
        <table>
        <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove Item</th>
        </tr>
        {
            props.myproduct.map((item,id)=>{
                return (
                    <tr>
                    <td>{item.name}</td>
                    <td>{item.price} </td>
                    <td><button onClick={()=>subtract(item,id)}><GrFormSubtract/></button>{item.cartCount}<button onClick={()=>heart(item,id)}>+</button></td>
                    <td>{item.cartCount*item.price} </td>
                    <td><RiDeleteBin6Line onClick={()=>deleteItem(item,id)}/></td>
                    </tr>
                )
                }) 
        }
        <p>Total Price {totalPrice()}</p>
        <button onClick={()=>Reset()}><RiDeleteBin6Line/>Delet All Item</button>
        </table>
        </div>
        </>
    );
}
export default Product;