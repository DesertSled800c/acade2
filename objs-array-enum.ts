// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "AK",
//   age: 30,
//   hobbies: ['sports', 'cooking']
//   role: [2, 'author']
// };


// const ADMIN = 0;
// const REAN_ONLY = 1;
// const AUTHOR = 2;
enum Role { ADMIN = 5 , READ_ONLY = 4, AUTHOR };

const person = {
  name: "AK",
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN
  
};
// person.role.push('admin');
// person.role = ['admin', 'user'];

let favorteActivities: string[];
favorteActivities = ['sports']

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR) {
    console.log('is admin');
}
