import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";
import { Fragment } from "react";
import Carta from "./Carta";

/**
 * Funcion que se encarga de crear el html de la lista de 
 * cartas
 * @param {*} url direccion url de la api
 * @param {*} addToDeck funcion para añadir cartas al deck
 * @returns 
 */
const Cartas = ({url, addToDeck}) => {
    const [cartas, loading] = useFetch(url);//fetch para la ca


    //en caso de que loading sea true mostramos el spiner
    if (loading) {
        return <Loading />;
    }

    return (
        <Fragment>
        <h1>Select Cards</h1>
        <div className="row mt-2">
            {cartas.map((item) => (
                <Carta key={item.id} data={item} addToDeck={addToDeck} />
            ))}
        </div>
        </Fragment>
    );
};

export default Cartas;
