import { Fragment, useEffect, useState } from "react";
import Deck from "./components/Deck";
import Cartas from "./components/Cartas"
import Navbar from "./components/NavBar";

//componente raiz de la app
function App() {
  let [deck, setDeck] = useState([]);//useStack para el deck
  const [totalCards, setNumeroCartas] = useState(0);// cantidad de cartas en el deck
  const [total, setTotal] = useState(0);//cose total del deck
  const [url, setUrl] = useState("https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints");//url a la que se va a realizar la peticion

  //cada vez que se modifique deck lanzamos las siguientes metodos
  useEffect(() => {
    obtenerTotalCartas();
    obtenerTotal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deck]);


  /**
 * Metodo que obtiene el coste total del deck
 */
  const obtenerTotal = () => {
    let total = 0;
    deck.forEach(element => {
      total += (element.price * element.quantity);
    });

    setTotal(total.toFixed(2));//cambiamos el estado de total
  }

  /**
 * Metodo que obtiene la cantidad total de cartas del deck
 */
  const obtenerTotalCartas = () => {
    let totalCartas = 0;
    deck.forEach(element => {
      totalCartas += element.quantity;
    });

    setNumeroCartas(totalCartas);//cambiamos el estado del totalCartas
  }

  /**
   * Funcion que inserta o actualiza un nueva carta en el deck
   * @param {*} card 
   */
  const addToDeck = (card) => {
    let findCard = deck.find(element => element.id === card.id);

    if (findCard && findCard.quantity < 4 && totalCards < 40) {
      findCard.quantity += 1;
    } else if (!findCard && totalCards < 40) {
      card.quantity = 1;
      deck.push(card);
    }

    setDeck([...deck]);
  };

    /**
   * Funcion que elimina o actualiza un nueva carta en el deck
   * @param {*} card 
   */
     const removeToDeck = (card) => {
      let findCard = deck.find(element => element.id === card.id);
  
      if (findCard && findCard.quantity > 1) {
        findCard.quantity -= 1;
      } else if (findCard.quantity === 1) {
        var i = deck.indexOf(findCard);
        deck.splice( i, 1 );
      }
  
      setDeck([...deck]);
    };

  return (
    <Fragment>
      <Navbar setUrl={setUrl}></Navbar>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col-7">
            <Cartas url={url} addToDeck={addToDeck}></Cartas>
          </div>
          <div className="col-5">
            <Deck deck={deck} total={total} totalCards={totalCards} removeToDeck={removeToDeck} ></Deck>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
