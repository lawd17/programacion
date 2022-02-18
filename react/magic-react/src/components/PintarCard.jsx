import Card from '../model/Card.js';

/**
 * Funcion que crear el html de una carta 
 * @param {*} 
 * @returns 
 */
const PintarCard = ({data, addToDeck}) => {
    //llamaos a la funcion statica de la clase que nos convierte al objeto card
    const card = Card.apiToCard({data});

    return (
        <div className="col-md-6 col-xl-3 mb-2">
            <div className="card">
                <img
                    src={card.imagen}
                    alt={`imagen-${card.name}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5>{card.name}</h5>
                    <button className="btn btn-primary" onClick={() => addToDeck(card)}>Add to Deck</button>
                </div>
            </div>
        </div>
    );
};

export default PintarCard;