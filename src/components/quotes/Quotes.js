import React from "react";
import QuoteCard from "./QuoteCard";

function Quotes({quotes}) {
  return (
    <section className="all-quotes">
      <div className="quotes wrapper">
        {/* {JSON.stringify(quotes)} added in Pass the quotes... removed in Display the quotes*/}
        {quotes.map((quote) => (<QuoteCard key={quote.id} quote={quote}/>))}
      </div>
    </section>
  )
}

export default Quotes;