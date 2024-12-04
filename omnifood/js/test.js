import { lastName, myFirstName } from './script';

console.log(myFirstName);
console.log(lastName);

function printFullName(fn, ln) {
  console.log(`${fn} ${ln}`);
}

printFullName(myFirstName, lastName);
