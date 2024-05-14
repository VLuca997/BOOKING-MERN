import React from 'react'
import { Link } from 'react-router-dom'

export default function SearchItem({ item }) {
  return (
    <div>
      <h2>DESCRIZIONE : {item.description}</h2>
      <div>
        {item.rating && 
          <div>
            <span>Excelentissimo</span>
            <button>{item.rating}</button>
          </div>
        }
        <div>
          <span>$ {item.cheapestPrice}</span>
        </div>
        <Link to={`/hotels/${item._id}`}>
          <button>CLICK ME</button>
        </Link>
      </div>
    </div>
  )
}
