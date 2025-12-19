import React from 'react'
import './Header.css'


export default function Header() {
  return (
    <div className='header'>
      <div className='header-contents'>
      <h2>Where Fresh Meets Flavor</h2>


        <p>
          Thoughtfully crafted dishes made with <br /> fresh ingredients and rich flavors.
        </p>

        <a href="#explore-menu"><button>View Menu</button></a>
      </div>
    </div>
  )
}
