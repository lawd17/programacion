import React, { Fragment } from 'react'
import MyDeckCard from './MyDeckCard';

/**
 * Funcion principal que muestra el deck en pantalla
 * @param {*}  
 * @returns 
 */
const PintarMyDeck = ({ deck, totalCards, total }) => {

  return (
    <Fragment>
      <h1>Selected</h1>
      <table className='table table-sm table-striped'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {deck.map((item) => (
            <MyDeckCard key={item.id} card={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={2}>Total: {total} €</td>
            <td>{totalCards}</td>
          </tr>
        </tfoot>
      </table>
    </Fragment>
  )
}

export default PintarMyDeck;



