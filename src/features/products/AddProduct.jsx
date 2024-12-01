import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProducts } from "./productSlice";

import { nanoid } from 'nanoid'

const AddProduct = () => {


  const [product, setProduct]=useState({
    title: "",
    description: "",
    price: "",
    category: "",
  })

  const dispatch=useDispatch();

  const handleChange=(e)=>{
    const {name, value}=e.target;
    setProduct((prevProduct=>({...prevProduct, [name]:value})))
  }

  return <form onSubmit={(e)=>{
    e.preventDefault();
    dispatch(createProducts({...product,id:nanoid()}))
  }}>
    <input className="form-control" type="text" placeholder="Title" name="title" onChange={handleChange} value={product.title}  />
    <input className="form-control" type="text" placeholder="Description" name="description" onChange={handleChange} value={product.description}  />
    <input className="form-control" type="text" placeholder="Price" name="price" onChange={handleChange} value={product.price}  />
    <input className="form-control" type="text" placeholder="Category" name="category" onChange={handleChange} value={product.category}  />
    <button type="submit">Add Product</button>
  </form>;
};

export default AddProduct;
