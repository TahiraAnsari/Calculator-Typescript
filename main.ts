import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.bgWhiteBright(chalk.black("\n-----Calculator---- \n")));
const answers:{
    num1: number,
    num2: number,
    operator: string,
} = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter your 1st number: ",
    },
    {
        type: "number",
        name: "num2",
        message: "Enter your 2st number: ",
    },
    {
        type: 'list',
        name: 'operator',
        message:'Select Operator',
        choices: ["1: Addition", "2: Subtraction", "3: Multiplication", "4: Division"],
    },
    
]);
const {num1, num2, operator} = answers;
if(num1 && num2 && operator){
    if(operator === "1: Addition"){
        addNum();
    }else if(operator === "2: Subtraction"){
        subNum();
    } if(operator === "3: Multiplication"){
        mulNum();
    }else if(operator === "4: Division"){
        divNum();
    }
}else{
    console.log("Kindly enter valid number!");
}

//creates a Functions.
function addNum(){
console.log(chalk.bgBlue("\n-----Addition----"));
console.log(`Addition: ${num1+num2}`);
}
function subNum(){
    console.log(chalk.bgBlue("\n-----Subtraction----"));
    console.log(`Subtraction: ${num1-num2}`);
}
function mulNum(){
        console.log(chalk.bgBlue("\n-----Multiplication----"));
        console.log(`Multiplication: ${num1*num2}`);
}
function divNum(){
    console.log(chalk.bgBlue("\n-----Division----"));
    console.log(`Division: ${num1/num2}`);
}


