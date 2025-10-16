import { Engine } from "./Engine.ts";
import { Owner } from "./Owner.ts";

const engine = new Engine(500, "Petrol", "Audi", "R8");
const owner = new Owner("Cem", 18);

owner.setEngine(engine);
engine.setOwner(owner);

console.log("Owner:", owner.getName(), "-", owner.getAge(), "Jahre alt");
console.log("Fahrzeug:", engine.maker, "-", engine.horsepower, "PS");
console.log("Engine des Owners:", owner.getEngine()?.maker);
console.log("Fahrzeugmodell:", engine.model);
console.log("Owner des Engines:", engine.getOwner()?.getName());
