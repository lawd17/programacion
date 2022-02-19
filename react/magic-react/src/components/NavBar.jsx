import React, { Fragment } from 'react'
import SelectDeck from './SelectDeck'
import logo from '../assests/img/logo.png'

/**
 * Funcion encargada de mostrar en navbar de la api asi 
 * como llamar al componente SelectDeck
 * @param {*}  setUrl funcion para cambiar el estado de url
 * @returns 
 */
const Navbar = ({ setUrl }) => {

    return (
        <Fragment>
            <nav className='navbar navbar-expand-lg navbar-light bg-dark'>
                <div className='container-fluid'>
                    <img className='logo' src={logo} alt="logo" />
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    <li className='nav-item mx-2'>
                        <a className='nav-link active text-white' aria-current='page' href="">Home</a>
                    </li>
                </ul>
                </div>
                <div className='selected-deck'>
                    Select deck: 
                    
                </div>
                <SelectDeck setUrl={setUrl}></SelectDeck>
            </nav>

        </Fragment>
    )
}

export default Navbar