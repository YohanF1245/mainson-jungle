import "../styles/Cart.css"
import { useState } from "react"
function Cart(){
    const monstera = 8
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    

    return isOpen ? (
    <div className="lmj-cart">
        <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
            <li>Monstera : {monstera}€</li>
            <button className="lmj-cart-add-button" onClick={() => updateCart(cart + 1)}>Ajouter au panier</button>
        <p>Total : {monstera * cart}€</p>
        <button onclick={() => updateCart(0)}>Vider le panier</button>
    </div>
    ) : (
        <button onClick={() => setIsOpen(true)}>Voir le panier</button>
    )
}
export default Cart