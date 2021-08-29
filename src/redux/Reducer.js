import { FETCH_PRODUCTS_REQUESTED, PRODUCTS_CANOT_BE_FETCHED, PRODUCTS_FETCHED, ADD_TO_CART,REMOVE_FROM_CART, ADJUST_QUANTITY  } from "./ActionTypes";

const initialState   = {
    loading:false,
    products:[],
    cart:[],
    error:''
}


const reducer = (state = initialState,action) =>{
    switch(action.type){
        
        case FETCH_PRODUCTS_REQUESTED: 
            return{
                ...state,
                loading:true
            }

        case PRODUCTS_FETCHED: 
            return{
                 ...state,
                loading:false,
                products: action.payload,
                error: ''
            }

        case PRODUCTS_CANOT_BE_FETCHED: 
            return{
                 ...state,
                loading:false,
                products:[],
                error:action.payload
            }

        case ADD_TO_CART: 
            const item = state.products.find( (product) => product._id === action.payload.id );
      // Check if Item is in cart already
            const inCart = state.cart.find((item) => item._id === action.payload.id ? true : false );

            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item._id === action.payload.id ? 
                        { ...item, qty: item.qty + 1 } : item )
                : [...state.cart, {...item, qty: 1 }],
            };

        case REMOVE_FROM_CART: 
            return{
                ...state,
                cart:state.cart.filter( item => item._id !== action.payload.id)
            };

        case ADJUST_QUANTITY:
            return {
        ...state,
        cart: state.cart.map((item) =>
          item._id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      }; 
            

        default: return state
    }

}


export default reducer










































// import { FETCH_USERS_REQUESTED, USERS_CANOT_BE_FETCHED, USERS_FETCHED, ADD_TO_CART,REMOVE_FROM_CART } from './ActionTypes';


// const initialState = {
//     loading:false,
//     products: [],
//     cart:[],
//     error:''
// }


// const reducer = (state = initialState,action)=>{
//     switch(action.type){
//         case FETCH_USERS_REQUESTED:return{
//             ...state,
//             loading:true
//         }
//         case USERS_FETCHED: return {
//             ...state,
//             loading:false,
//             products: action.payload,
//             error: ''
//         }
//         case USERS_CANOT_BE_FETCHED:return{
//             ...state,
//             loading:false,
//             error:action.payload
//         }
//         case ADD_TO_CART:

//             const item = state.products.find( item=> item._id === action.payload.id )
//             const incart = state.cart.find((item)=> item._id === action.payload.item._id ? true : false )
//             console.log(incart);
//             return{
//                 ...state,
//                 cart: incart? state.cart.map((item)=> item._id === action.payload.item_.id ? {...item, qty: item.qty + 1} : item) : [...state.cart,{...item,qty :1}]

//         };
//         case REMOVE_FROM_CART:return{
//                 ...state,
//                 cart:action.payload
//             }



//       default:return state  
//     }

// }



// export default reducer
