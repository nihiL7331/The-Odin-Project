// Map to names
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let users = [john, pete, mary];
//
// let names = mapToNames(users);
//
// alert(names);
//
// function mapToNames(objs) {
//   return objs.map((val) => val.name);
// }

// Map to objects
//
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
//
// let users = [john, pete, mary];
//
// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));
//
// alert(usersMapped[0].id);
// alert(usersMapped[0].fullName);

// Sort users by age
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
//
// let arr = [pete, john, mary];
//
// sortByAge(arr);
//
// alert(arr[0].name);
// alert(arr[1].name);
// alert(arr[2].name);
//
// function sortByAge(arr) {
//   return arr.sort((a, b) => a.age - b.age);
// }

// Get average age
//
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
//
// let arr = [john, pete, mary];
//
// alert(getAverageAge(arr));
//
// function getAverageAge(arr) {
//   return arr.reduce((acc, curr) => acc + curr.age, 0) / arr.length;
// }
