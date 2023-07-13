import React from "react";

function FavoriteQuoteCard({ quote, removeFromFavorites, listPostion }) {
  return (
    <li className="quote-card" data-list-position={listPostion}>
      <span className="close-quote" onClick={() => removeFromFavorites(quote.id)} >
        x
      </span>
      <h3>{quote.text}</h3>
      <p>{quote.author}</p>
    </li>
  )
}

export default FavoriteQuoteCard;