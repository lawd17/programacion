const Card = ({ card = "" }) => {
    const { id, name, prices, image_uris } = card;

    return (
        <div className="col-md-4 mb-2">
            <div className="card">
                <img
                    src={image_uris.normal}
                    alt={`imagen-${image_uris.normal}`}
                    className="card-img-top"
                />
                <div className="card-body">
                    <h5>{name}</h5>
                    <button className="btn btn-primary ">Add to Deck</button>
                </div>
            </div>
        </div>
    );
};

export default Card;