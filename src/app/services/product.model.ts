export class ProductModel {
    constructor(
    public name: string,
    public description: string,
    public price: number
    ) {
      // Этого не нужно писать, происходит автоматически
      // this.name = name;
      // this.description = description;
      // this.price = price;
    }
  }
