import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";
import { Fragment } from "react";
import PintarCard from "./PintarCard";

/**
 * Funcion que se encarga de crear el html de la lista de 
 * cartas
 * @param {*}  
 * @returns 
 */
const PintarCards = ({addToDeck}) => {
    const [cards, loading] = useFetch();//fetch para la peticuib

    //en caso de que loading sea true mostramos el spiner
    if (loading) {
        return <Loading />;
    }

    return (
        <Fragment>
        <h1>Select Cards</h1>
        <div className="row mt-2">
            {cards.map((item) => (
                <PintarCard key={item.id} data={item} addToDeck={addToDeck} />
            ))}
        </div>
        </Fragment>
    );
};

export default PintarCards;
