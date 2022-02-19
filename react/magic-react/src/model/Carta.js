/**
 * Clase Card
 */
export class Card {

    constructor(id, name, price, imagen,  quantity) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imagen = imagen;
      this.quantity = quantity;
    }

    static apiToCard(data){
        let id = data.data.id;
        let name = data.data.name;
        let price = parseFloat(data.data.prices.eur);
        let imagen = data.data.image_uris.normal;
        let quantity = null;
        let carta = new Card(id, name, price, imagen, quantity);
        return carta;
    }

  }

export default Card