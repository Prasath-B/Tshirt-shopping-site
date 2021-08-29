import React,{useState} from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchProducts,AddToCart } from '../redux/Actions';
import '../App.css';




function Usercontainer({products,fetchProducts,addCart}) {
    
 
    // const [cart,setcart]=useState([]);

    useEffect(()=>{
        fetchProducts()
         console.log(products);
         
    },[])

  

 

    return  <div className="product">
        
        {products.map( (data,index) =>{
        
        const {name,price,image,description,_id} = data;
       
         return <div className="card card-a" key={index}>
        <img className="card-img-top" src={image} alt='tshirt' />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="description card-text">{description}</p>
            <p className="card-text product-price">${price}</p>
            <button  className="btn btn-dark btn-lg add-to-cart-btun" onClick = {()=>{addCart(_id)}} >Add to cart</button>
            
           
            

        </div>
        </div>
         })}
       
        </div>

}

const mapStatetoProps = state =>{
    return {
        products: state.shop.products
    }
}

const mapDispatchtoProps = dispatch =>{
    return {
        fetchProducts: ()=> dispatch(fetchProducts()),
        addCart: (id) => dispatch(AddToCart(id))
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Usercontainer);
