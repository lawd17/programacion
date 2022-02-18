import { Fragment, useState } from "react";
import PintarCartas from "./components/PintarCards";
import PintarMyDeck from "./components/PintarMyDeck";

function App() {
  let [deck, setDeck] = useState([]);//useStack para el deck

  /**
   * Funcion que inserta o actualiza un nueva carta en el deck
   * @param {*} card 
   */
  const addToDeck = (card) => {
    let findCard = deck.find(element => element.id == card.id);

    if (findCard) {
      findCard.quantity += 1;
    } else {
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
            <PintarMyDeck deck={deck}></PintarMyDeck>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
