import type { Owner } from "./Owner.ts";

export class Engine {
  constructor(
    public horsepower: number,
    public fuelType: string,
    public maker: string,
    public model: string
  ) {}

  private owner?: Owner;

  setOwner(owner: Owner) {
    this.owner = owner;
  }

  getOwner(): Owner | undefined {
    return this.owner;
  }
}
