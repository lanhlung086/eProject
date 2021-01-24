import React from "react";
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from "./StateProvider";
import {getBasketPriceTotal, getBasketItemTotal} from "./reducer";
import './css/Subtotal.css';

function Subtotal() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <CurrencyFormat
            renderText = {(value) => (
                <div className="checkout__subtotal">
                    <p>Subtotal ({(cart.length === 0) ? "0 item" : `${getBasketItemTotal(cart)} items`}): <span>{value}</span></p>
                    <div className="checkout__checkboxGift">
                        <input id="gift" type="checkbox" name="gift" value="gift"/><label htmlFor="gift">This order contains a gift</label>
                    </div>
                    <button className="checkout__checkoutButton">Proceed to checkout</button>
                </div>
            )}
            decimalScale={2}
            value={getBasketPriceTotal(cart)}
            thousandSeparator={true}
            displayType={"text"}
            prefix={"$"}
        />
    )
}

export default Subtotal;