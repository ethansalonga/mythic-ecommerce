import { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Books from "./pages/Books"
import BookInfo from "./pages/BookInfo"
import Cart from "./pages/Cart"
import { books } from "./data"

function App() {
  const [cart, setCart] = useState([])

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])

    // ADDING MULTIPLE QUANTITIES OF ONE ITEM
    // const dupeItem = cart.find(item => +item.id === +book.id)
    // if (dupeItem) {
    //   setCart(
    //     cart.map(item => {
    //       if (item.id === dupeItem.id) {
    //         return {
    //           ...item,
    //           quantity: item.quantity + 1,
    //         }
    //       } else {
    //         return item
    //       }
    //     })
    //   )
    // } else {
    //   setCart([...cart, { ...book, quantity: 1 }])
    // }
  }

  function changeQuantity(book, quantity) {
    setCart(
      cart.map(item =>
        item.id === book.id
          ? {
              ...item,
              quantity: +quantity,
            }
          : item
      )
    )
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={
              <BookInfo books={books} addToCart={addToCart} cart={cart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                books={books}
                cart={cart}
                changeQuantity={changeQuantity}
                removeItem={removeItem}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
