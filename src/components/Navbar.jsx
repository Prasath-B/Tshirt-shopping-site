
import React from 'react';
import { useEffect,useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../App.css";


const iconUrl = "https://cdn3.iconfinder.com/data/icons/glypho-shopping-and-ecommerce/64/cart-alt-512.png"

function Navbar({products}){
    const [Number,setNumber] = useState(0);

    useEffect(()=>{
        var count = 0;
        products.forEach((item)=>{
            count = count + item.qty
        })
        setNumber(count)
    },[Number,products])

    return<> 
    <nav className='navbar navbar-expand-lg navbar-light'>
        <a href="s" className="navbar-brand brand" >Toman</a>
        <div className ="cart-for-mobile">
            <ul className = "navbar-nav ms-auto">
                <li className='nav-item'></li>
                <li className='nav-item'><Link to='/cart' className="nav-link nav-link-mobile" ><img src={iconUrl} alt="cart-icon-mobile" className="cart-icon-mobile" />  Cart-{Number}</Link></li>
            </ul>
        </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'><img src={iconUrl} alt="cart-icon" className="cart-icon" /></li>
                 <li className='nav-item-cart'><Link to='/cart' className="nav-link" >Cart-{Number}</Link></li>
                <li className='nav-item'><a href="h" className='nav-link'>Contact</a></li>
                <li className='nav-item'><a href="g" className="nav-link">Feedback</a></li>
               
            </ul>
        </div>

        
    </nav>
    </>

}

const mapStatetoProps = state =>{
    return {
        products: state.shop.cart
        }
}

export default connect(mapStatetoProps,null)(Navbar);

