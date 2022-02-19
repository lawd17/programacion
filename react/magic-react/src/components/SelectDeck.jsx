import React, { Fragment } from 'react'
import APIS from '../model/Apis'

/**
 * Componente que muestra la lista de opciones de decks predeterminado
 * a partir de la lista de apis disponiles en APIS
 * @param {*}  setUrl funcion para cambiar el estado de url
 * @returns 
 */
const SelectDeck = ({ setUrl }) => {

    /**
     * Funcion que detecta un cambio en el select
     * y cambia la url a la seleccionado
     * @param {*} event 
     */
   const cambioApi = (event) => {
    let url = event.target.value;
    setUrl(url);
  }

  return (
    <Fragment>
        <select id="selectDeck" onChange={cambioApi}>
            {APIS.map((item) => (
               <option key={item.url} value={item.url}>{item.name}</option>
            ))}
        </select>
    </Fragment>
  )
}

export default SelectDeck