export enum Category {
  First = 1,
  Second,
}

export class ProductModel {
    constructor(
      public name: string,
      public description: string,
      public price: number,
      public category: Category,
      public isAvailable: boolean,
    ) {
    }
  }
