import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvide=(props)=>{

   const [cartItems , setCartItems]=useState([]);
   const [searchTerm , setSearchTerm] = useState("")

   const addToCart=(itemId)=>{
    if(!cartItems[itemId]){                // if item is not in cart and added first time
      setCartItems((prev)=>({...prev,[itemId]:1}))         //item id will one
    }else{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1})) // if it's in cart already increase it by 1.
    }
   }

   const removerFromCart=(itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))     //understand the syntax⚠️
   }

   const getTotalCartAmount=()=>{
    let totalAmount = 0;
    for(const item in cartItems){
  
       if(cartItems[item]>0){
         let itemInfo = food_list.find((prod)=>prod._id === item);
         totalAmount +=itemInfo.price*cartItems[item];
       }
      }
      return totalAmount ;
   }
 
    const contextValue={
      food_list,
      cartItems ,
      setCartItems,
      addToCart,
      removerFromCart,
      getTotalCartAmount,
      searchTerm,
      setSearchTerm

    }
    
    return(
        <StoreContext.Provider value={contextValue}>
           {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvide;

