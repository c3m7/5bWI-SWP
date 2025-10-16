export class Car {
  private color: string = "black";
  private model: string = "TT";

  constructor(model: string, public maker: string) {
    this.model = model;
    this.maker = maker;
  }

  getColor(): string {
    return this.color;
  }
}