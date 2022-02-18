import React from 'react'

/**
 * Componente encargadp de mostrar los datos de un carta en
 * el mazo
 * @param {*} item carta del del que se va a mostrar
 * @returns html
 */
const MyDeckCard = (item) => {
    let name = item.card.name;
    let price = item.card.price.toFixed(2);
    let quantity = item.card.quantity;
    let total = (price * quantity).toFixed(2);

  return (
    <tr>
        <td>{name}</td>
        <td>{price}€</td>
        <td>{quantity}</td>
        <td>{total}€</td>
    </tr>
  )
}

export default MyDeckCard