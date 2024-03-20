const optiarb_parser = require('optiarb-parser');
const optiarb_parser_usage = require('optiarb-parser-usage');
const sequelize = require('sequelize');
const jquery = require('jquery');
const sinon = require('sinon');
const web3_react = require('web3-react');
const validator = require('validator');
const react_redux = require('react-redux');

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
}
const myRectangle = new Rectangle(10, 5);
console.log(`Area of Rectangle: ${myRectangle.area()}`);

const myFunc = () => {
  console.log('This is a simple function.');
};
myFunc();

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your age? ', answer => {
  console.log(`You are ${answer} years old`);
  rl.close();
});

const user = { firstName: 'John', lastName: 'Doe' };
const { firstName, lastName } = user;
console.log(`User's name is ${firstName} ${lastName}`);

console.log(`Your OS is ${process.env.OS}`);

console.log('Logging a message to the console.');