const stack: number[] = [];

stack.push(10);
stack.push(20);
stack.push(30);

const lastItem = stack.pop();

console.log("Entferntes Element:", lastItem);
console.log("Aktueller Stack:", stack);