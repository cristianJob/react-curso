import { useState, useEffect } from "react";
import Header from "./components/Headers"
import Guitar from "./components/Guitar"
import { db } from "./data/db"

function App() {

  const [data, setData] = useState([]);
  const [cart, setCard] = useState([]);

  useEffect(() => {
    setData(db)
  }, [])

  function addToCard(item) {
    const itemExist = cart.findIndex(guitar => guitar.id === item.id)
    if (itemExist >= 0) {
      const updateCardt = [...cart]
      updateCardt[itemExist].quantity++
      setCard(updateCardt)
    } else {
      item.quantity = 1
      setCard([...cart, item])
    }

  }

  function removeFromCart(id) {
    // prevcart es una variable que funciona como callback por default es ()=>
    setCard(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => {

            return (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                setCard={setCard}
                addToCard={addToCard}
              />
            )
          })}

        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App
