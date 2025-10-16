import type { Engine } from "./Engine.ts";

export class Owner {
  private engine?: Engine;

  constructor(private name: string, private age: number) {}

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  setEngine(engine: Engine) {
    this.engine = engine;
  }

  getEngine(): Engine | undefined {
    return this.engine;
  }
}
