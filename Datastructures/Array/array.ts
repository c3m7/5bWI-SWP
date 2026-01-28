interface User {
  id: number;
  name: string;
  isActive: boolean;
}

const users: User[] = [
  { id: 1, name: "Anna", isActive: true },
  { id: 2, name: "Tom", isActive: false },
  { id: 3, name: "Lisa", isActive: true },
];

users.forEach((user) => {
  if (user.isActive) {
    console.log(`User ${user.id}: ${user.name} is active`);
  }
});