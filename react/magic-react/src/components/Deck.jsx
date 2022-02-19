import React, { Fragment } from 'react'
import DeckCarta from './DeckCarta';

/**
 * Funcion principal que muestra el deck en pantalla
 * @param {*} deck lista con las cartas del deck del usuario
 * @param {*} totalCards cantidad de cartas en el deck
 * @param {*} total coste total del deck
 * @param {*} removeToDeck funcion que elimina cartas del deck
 * @returns 
 */
const Deck = ({ deck, totalCards, total, removeToDeck }) => {

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
            <DeckCarta key={item.id} card={item} removeToDeck={removeToDeck} />
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

export default Deck;



