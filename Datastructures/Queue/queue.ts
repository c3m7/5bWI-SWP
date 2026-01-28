const queue: string[] = [];

queue.push("Anna");
queue.push("Tom");
queue.push("Lisa");

const first = queue.shift();
const last = queue.pop();

console.log("Entfernt vorne:", first);
console.log("Entfernt hinten:", last);
console.log("Queue:", queue);