// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: 'Michael',
  age: 30,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN
}

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}