const splitMessage = (message, delimiter) => {
    console.log(delimiter);
    const arr = message.split(delimiter);
    return arr;
};
const b = splitMessage('A love JS', ' ');
console.log(b);
// -------------------
const makeStringFromArray = (array, delimiter) => {
    const string = array.join(delimiter);
    return string;
}
const c = makeStringFromArray(['js', 'is', 'cool'], ' ');
console.log(c);
// -----------------------
const checkFruit = (fruit) => {
    const arr = ['яблуко', 'груша', 'слива'];
    const fruct = arr.includes(fruit);
    return fruct;
}
const t = checkFruit('груша');
console.log(t);
// homework1
const spliceArray = (array) => {
    const start = array.indexOf('JavaScript');
    const arr = array.splice(start, 3);
    return arr;
}
const secondPart = spliceArray(['I', 'study', 'JavaScript', 'right', 'now']);
// --------------------------------------
const sliceArray = (array) => {
    const arr = array.slice(0, 2);
    return arr;
}
const firstPart = sliceArray(['I', 'study', 'JavaScript', 'right', 'now']);
console.log(firstPart);
// -------------------------------------
const concatArr = (array1, array2) => {
    const arr = array1.concat(array2);
    const a = arr.join(' ');
    return a;
}
const message = concatArr(firstPart, secondPart);
console.log(message);
// homework2
const jaroslav = {
    name: 'Jaroslav',
    lastName: 'Makukha',
    age: 16,
    numbers: [13, 22, 31, 49],
    rating: 13,

    minusNumber(){
        this.numbers.pop();
    },
    changeAge(){
        this.age += 1;
    },
}
jaroslav.changeAge();
jaroslav.minusNumber();
console.log(jaroslav);
// --------------------------
const kilometrsToMiles = (kilometrs) => {
    const miles = kilometrs * 0.6214;
    return miles;
}
const miles = kilometrsToMiles(120000);
console.log(miles);
// --------------------------
const spliceArr = (array) => {
    const start = array.indexOf('Orange');
    array.splice(start, 1, 'grapefruit');
}
const p = spliceArr(['Apple', 'Orange', 'Plum'])
console.log(p);
// homework3
const worker = {
    name: "bill",
    job: "architect",
    salary: 10000,
  };
  const workers = [
    {
      name: "bill",
      job: "architect",
      salary: 10000,
    },
    {
      name: "Arni",
      job: "actor",
      salary: 100000,
    },
    {
      name: "Bob",
      job: "singer",
      salary: 40000,
    },
    {
      name: "Ann",
      job: "manager",
      salary: 30000,
    },
    {
      name: "Antony",
      job: "Footballer",
      salary: 90000,
    },
    {
      name: "John",
      job: "builder",
      salary: 25000,
    },
    {
      name: "Arthur",
      job: "teacher",
      salary: 20000,
    },
  ];
  const averageSalary = (array) => {
    const salaries = [];
  
    let result = 0;
    for (const worker of array) {
      salaries.push(worker.salary);
  
      result += worker.salary;
    }
    const total = result / salaries.length;
    return total;
  }
  const a = averageSalary(workers);
  console.log(a);

  const user = {
    name: 'Jaroslav',
    lastName: 'Makukha',
    age: 16,
    numbers: [13, 22, 31, 49],
    rating: 13,
    location: {
        country: 'Germany',
        town: 'Tuttlingen',
    }
}
const helloUser = (params) => {
    const {name, lastName, age, numbers, rating, location: country, town} = user;
    console.log(`Привіт ${name} ${lastName}, ваш вік ${age} та у ваших минулих спробах ${numbers}, ваш рейтинг ${rating} та місце знаходження ${country} ${town}`);
}
helloUser(user)
// homework4
