import React from "react"
import Item from "./ui/Item"
import { items } from "../data"

const Featured = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {items
              .filter(book => book.rating === 5)
              .slice(0, 4)
              .map(book => (
                <Item book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Featured
