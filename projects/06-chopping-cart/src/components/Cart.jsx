import { CartIcon, ClearCartIcon } from './Icons'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import './Cart.css'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>
          Qty: {quantity}
        </small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  )
}

export const Cart = () => {
  const cartCheckBox = useId()
  const { cart, clearCart, addToCart } = useCart()
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckBox}>
        <CartIcon />
      </label>
      <input id={cartCheckBox} type='checkbox' />

      <aside className='cart'>
        <ul />
        {cart.map(product => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}
