#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
let total = 0;
let a = true;
let list = [];
while (a == true) {
    let customer = await inquirer.prompt([
        {
            name: "Choice",
            message: "Choose what do you wanna buy",
            type: "list",
            choices: [
                "Sushi(5000rs)",
                "Ham burger(1500rs)",
                "Chicken Plater(2500rs)",
                "Tacos al Pastor(3000rs)",
                "Fish and Chips(1000rs)",
                "Ratatouille(4000rs)"
            ]
        }
    ]);
    switch (customer.Choice) {
        case "Sushi(5000rs)":
            total += 5000;
            break;
        case "Ham burger(1500rs)":
            total += 1500;
            break;
        case "Chicken Plater(2500rs)":
            total += 2500;
            break;
        case "Tacos al Pastor(3000rs)":
            total += 3000;
            break;
        case "Fish and Chips(1000rs)":
            total += 1000;
            break;
        case "Ratatouille(4000rs)":
            total += 4000;
            break;
    }
    function items(item) {
        list.push(item);
        console.log(chalk.bold.blue(`YOUR CART=>\n`));
        list.forEach((item, index) => console.log(chalk.green(`${index + 1}. ${item}`)));
    }
    items(customer.Choice);
    let customer2 = await inquirer.prompt([
        {
            name: "Choice2",
            message: "Do you want anything else?",
            type: "list",
            choices: ["Continue", "Exit"]
        }
    ]);
    if (customer2.Choice2 === "Exit") {
        a = false;
    }
    else {
        a = true;
    }
}
let length = list.length;
console.log(chalk.bold.magenta("Final Cart=>\n"));
list.forEach((item, index) => console.log(chalk.cyan(`${index + 1}. ${item}\n`)));
console.log(chalk.red("---------------------------------------------------------------------"));
console.log(chalk.yellow("Total No. of items = " + length));
console.log(chalk.red("---------------------------------------------------------------------"));
console.log(chalk.yellow(`Total price = ${total}`));
let afterTax = total * 0.13;
console.log(chalk.red("---------------------------------------------------------------------"));
console.log(chalk.yellow("Tax Amount = 13%"));
let initialPrice = afterTax + total;
console.log(chalk.red("---------------------------------------------------------------------"));
console.log(chalk.yellow(`After tax price = ${initialPrice}`));
let serviceCharges = 0;
if (initialPrice < 10000) {
    serviceCharges += 250;
}
else {
    serviceCharges += 500;
}
let finalPrice = serviceCharges + initialPrice;
console.log(chalk.red("---------------------------------------------------------------------"));
console.log(chalk.yellow("Final Price = " + finalPrice));
console.log(chalk.bold("\n*Note Service charges may be applied"));
// 1.  inputs the total number of items purchased by customer  
// 2.  inputs the price of each item and adds to get total price
// 3.  calculates 13% as tax amount on the total bill
// 4.  adds total price and tax amount to get the amount of total bill
// 5.  outputs the amount of total bill
// 6.  calculates and outputs the service charges according to the given table
//-------------------------------------------------
//           TOTAL BILL        | Service Charges
//-----------------------------|------------------- 
//      1 To 10000 Rupees      |         250
//-----------------------------|-------------------
//   More than 10000 Rupees    |         500
//-------------------------------------------------
