import { Fragment, useEffect, useState } from "react";
import PintarCartas from "./components/PintarCards";
import PintarMyDeck from "./components/PintarMyDeck";

function App() {
  let [deck, setDeck] = useState([]);//useStack para el deck
  const [totalCards, setTotalCards] = useState(0);// cantidad de cartas en el deck
  const [total, setTotal] = useState(0);//cose total de ldeck

  //cada vez que se modifique deck lanzamos las siguientes metodos
  useEffect(() => {
    obtenerTotalCards();
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
  const obtenerTotalCards = () => {
    let totalCards = 0;
    deck.forEach(element => {
      totalCards += element.quantity;
    });

    setTotalCards(totalCards);//cambiamos el estado del totalCards
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

  return (
    <Fragment>
      <div className="container-fluid m-5">
        <div className="row">
          <div className="col-7">
            <PintarCartas addToDeck={addToDeck}></PintarCartas>
          </div>
          <div className="col-5">
            <PintarMyDeck deck={deck} total={total} totalCards={totalCards} ></PintarMyDeck>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
