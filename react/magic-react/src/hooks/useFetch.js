import Swal from "sweetalert2";
import { useEffect, useState } from "react";

export const useFetch = () => {
    const [Cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        obtenerCards();
    }, []);

    const obtenerCards = async () => {
        setLoading(true);
        try {
            const res = await fetch(
                `https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints`
            );

            if (!res.ok) {
                console.log(res);
                return Swal.fire({
                    title: "Error!",
                    text: `fallo en la url`,
                    icon: "error",
                });
            }

            const data = await res.json();
            console.log([...data.data]);
            setCards([...data.data]);
            
        } catch (error) {
            console.log(error);
            return Swal.fire({
                title: "Error!",
                text: `Error de servidor`,
                icon: "error",
            });
        } finally {
            setLoading(false);
        }
    };

    return [Cards, loading];
};
