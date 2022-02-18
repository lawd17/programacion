import Loading from "./Loading";
import Card from "./Card";
import { useFetch } from "../hooks/useFetch";
import { Fragment } from "react";

const PintarCartas = () => {
    const [cards, loading] = useFetch();

    if (loading) {
        return <Loading />;
    }

    return (
        <Fragment>
        <h1>Select Cards</h1>
        <div className="row mt-2">
            {cards.map((item) => (
                <Card key={item.id} card={item} />
            ))}
        </div>
        </Fragment>
    );
};

export default PintarCartas;
