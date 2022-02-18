import React, { Fragment } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import MyDeckCard from './MyDeckCard';

/**
 * Funcion principal que muestra el deck en pantalla
 * @param {*}  
 * @returns 
 */
const PintarMyDeck = ({ deck }) => {
  const [total, setTotal] = useState(0);//cose total de ldeck
  const [totalCards, setTotalCards] = useState(0);// cantidad de cartas en el deck

  //cada vez que se modifique deck lanzamos las siguientes metodos
  useEffect(() => {
    obtenerTotal();
    obtenerTotalCards();
  }, [deck]);

  /**
   * Metodo que obtiene el coste total del deck
   */
  const obtenerTotal = () =>{
    let total = 0;
    deck.forEach(element => {
      total +=(element.price * element.quantity);
    });

    setTotal(total.toFixed(2));//cambiamos el estado de total
  }

  /**
   * Metodo que obtiene la cantidad total de cartas del deck
   */
  const obtenerTotalCards = () =>{
    let totalCards = 0;
    deck.forEach(element => {
      totalCards +=element.quantity;
    });

    setTotalCards(totalCards);//cambiamos el estado del totalCards
  }

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



