import Card from '../model/Carta.js';//calse carta del modelo

/**
 * Funcion que crear el html de una carta 
 * @param {*} data datos de la carta que se va a mostrar
 * @param {*} addToDeck funcion que se encarga de insertar una carta en el deck
 * @returns 
 */
const Carta = ({data, addToDeck}) => {
    //llamaos a la funcion statica de la clase que nos convierte al objeto card
    const card = Card.apiToCard({data});

    return (
        <div className="col-md-6 col-xl-3 mb-2">
            <div className="card">
                <img
                    src={card.imagen}
                    alt={`imagen-${card.name}`}
                    className="card-img"
                    onClick={() => addToDeck(card)}
                />
                <div className="card-body">
                    <h5>{card.name}</h5>
                    <button className="btn btn-primary" onClick={() => addToDeck(card)}>Add to Deck</button>
                </div>
            </div>
        </div>
    );
};

export default Carta;