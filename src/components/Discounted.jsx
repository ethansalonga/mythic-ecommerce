import React from "react"
import { items } from "../data"
import Item from "./ui/Item"

const Discounted = () => {
  return (
    <section id="recent">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Discounted <span className="purple">Books</span>
          </h2>
          <div className="books">
            {items
              .filter(book => book.salePrice > 0)
              .slice(0, 8)
              .map(book => (
                <Item book={book} key={book.id} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discounted
