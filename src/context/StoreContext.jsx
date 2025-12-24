import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvide=(props)=>{

   const [searchTerm , setSearchTerm] = useState("")
 
    const contextValue={
      food_list,
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

