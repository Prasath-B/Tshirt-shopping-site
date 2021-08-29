
import React from 'react';
import { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchUsers } from '../redux/Actions';
import '../App.css';

function Usercontainer({users,fetchUsers}) {

    useEffect(()=>{
        fetchUsers()
    },[])

    return users.loading? (<h1>Loading</h1>) : users.error? ( <h1>{users.error}</h1> ) : ( 
        <div>
           
        {users.map( (data,index) =>{
        
        const {name,price,image,description,_id} = data
       
         return <div className="card card-a" key={index}>
        <img className="card-img-top" src={image} alt='tshirt' />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="description card-text">{description}</p>
            <p className="card-text product-price">{price}</p>
            <button to={`/${_id}`}  className="btn btn-dark btn-lg add-to-cart-btun">Cart</button>
        </div>
        </div>
         })}
       
        </div>
    )
}

const mapStatetoProps = state =>{
    return {
        users: state.users
    }
}

const mapDispatchtoProps = dispatch =>{
    return {
        fetchUsers: ()=> dispatch(fetchUsers())
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Usercontainer);
