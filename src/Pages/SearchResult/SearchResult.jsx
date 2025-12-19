import React, { useContext } from 'react'
import './SearchResult.css'
import { StoreContext } from '../../context/StoreContext'
import { Link } from 'react-router-dom'
import FoodItem from '../../Components/FoodItem/FoodItem'

export default function SearchResult() {

  const { cartItems, addToCart, searchTerm, food_list } = useContext(StoreContext)


  if (!searchTerm || searchTerm.trim() === "") {
    return (
      <div className="search-result">
        <h2>No search yet</h2>
        <p>Please search for a dish to see results.</p>
      </div>
    )
  }

  const normalizedSearch = searchTerm
  .toLowerCase()
  .replace(/\s|-/g, "");

  const filteredFood = food_list.filter((item) => {
  const name = item.name.toLowerCase();
  const category = item.category.toLowerCase();
  const type = item.type.toLowerCase().replace("-", ""); 

  return (
    name.includes(normalizedSearch) ||
    category.includes(normalizedSearch) ||
    type === normalizedSearch   
  );
});

  return (
    <div className="search-result">
      <h2>Search Results for "{searchTerm}"</h2>

      {filteredFood.length > 0 ? (
        <div className="search-grid">
          {filteredFood.map((item) => (
            <FoodItem key={item._id}
              id={item._id}
              name={item.name}
              price={item.price}
              description={item.description}
              image={item.image}
              type={item.type}   
            />
          ))}
        </div>
      ) : (
        <p>No dishes found</p>
      )}
    </div>
  )
}
