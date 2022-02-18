import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = () => {
    const [Cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCards();
    }, []);

    /**
     * Funcion que realiza la peticion a la api y devuelve 
     * los campos cambiando el estado de Cards
     * @returns cards y estado del loading
     */
    const obtenerCards = async () => {
        setLoading(true);//activamos el loading
        try {
            const res = await fetch(
                `https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints`
            );

            //comprobamos error el la respuesta
            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `fallo en la url`,
                    icon: "error",
                });
            }

            //recojemos la respuesta y actualizamos el estado de cards
            const data = await res.json();
            setCards([...data.data]);
            
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);//al acabar dejamos de mostrar el loading
        }
    };

    return [Cards, loading];
};
