import Swal from "sweetalert2";
import { useEffect, useState } from "react";

/**
 * Funcion que se encarga de realizar las peticiones a la 
 * api para obtener la lista de cartas
 * @param {*} url de la api
 * @returns 
 */
export const useFetch = (url) => {
    const [Carta, setCarta] = useState([]);// lista de cartas
    const [loading, setLoading] = useState(false);// estodo del carga 

    useEffect(() => {
        obtenerCartas(url);
    }, [url]);

    /**
     * Funcion que realiza la peticion a la api y devuelve 
     * los campos cambiando el estado de Cards
     * @returns cards y estado del loading
     */
    const obtenerCartas = async (url) => {
        setLoading(true);//activamos el loading
        try {
            const res = await fetch(url);

            //comprobamos error el la respuesta
            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `fallo en la url ${url}`,
                    icon: "error",
                });
            }

            //recojemos la respuesta y actualizamos el estado de cards
            const data = await res.json();
            console.log([...data.data]);
            setCarta([...data.data]);
            
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

    return [Carta, loading];
};
