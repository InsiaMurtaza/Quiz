import inquirer from "inquirer";
import chalk from "chalk";
let quizQuestions = await inquirer.prompt([{
        name: "answer0",
        message: "Q1.What is TypeScript?",
        choices: ["A) A variant of JavaScript designed for web development",
            "B) A superset of JavaScript that adds static types",
            "C) A backend framework",
            "D) A database query language"],
        type: "list"
    }, // correct_answer1:"B) A superset of JavaScript that adds static types"
    {
        name: "answer1",
        message: "Q2.Who developed TypeScript?",
        choices: ["A) Google", "B) Facebook", "C) Microsoft", "D) Amazon"],
        type: "list"
        // correct_answer2:"C) Microsoft"
    },
    {
        name: "answer2",
        message: "Q3.Which of the following features is unique to TypeScript compared to JavaScript?",
        choices: ["A) Asynchronous programming",
            "B) Object-oriented programming",
            "C) Static type definitions",
            "D) Functional programming"],
        type: "list"
        // correct_answer3:"C) Static type definitions"
    },
    {
        name: "answer3",
        message: "Q4.What file extension is used for TypeScript files?",
        choices: ["A) .ts", "B) .tsx", "C) .js", "D) Both A and B"],
        type: "list"
        // correct_answer4:"A) .ts"
    },
    {
        name: "answer4",
        message: "Q5.What is the main purpose of using TypeScript in a project?",
        choices: ["A) To enhance the styling of web pages",
            "B) To add static type checking for better code quality",
            "C) To manage databases",
            "D) To improve server-side scripting performance"],
        type: "list"
        // correct_answer5:"B) To add static type checking for better code quality"
    },
    {
        name: "answer5",
        message: "Q6.How can you convert TypeScript code into JavaScript code?",
        choices: ["A) By using the tsc (TypeScript Compiler)",
            "B) By using the npm package manager",
            "C) By using Babel",
            "D) By using Webpack"],
        type: "list"
        // correct_answer6:"A) By using the tsc (TypeScript Compiler)"
    },
    {
        name: "answer6",
        message: "Q7.Which TypeScript feature helps in catching errors at compile time instead of runtime?",
        choices: ["A) Decorators", "B) Static typing", "C) Prototypes", "D) Closures"],
        type: "list"
        // correct_answer7:"B) Static typing"
    },
    {
        name: "answer7",
        message: "Q8.Which of the following is a valid way to define an interface in TypeScript?",
        choices: ["A) interface Person { name: string; age: number;}",
            "B) type Person = { name: string; age: number;}",
            "C) Both A and B",
            "D) Neither A nor B"],
        type: "list"
        // correct_answer8:"C) Both A and B"
    },
    {
        name: "answer8",
        message: "Q9.Can TypeScript code run directly in the browser?",
        choices: ["A)Yes", "B)No"],
        type: "list"
        // correct_answer9:"B)No"
    },
    {
        name: "answer9",
        message: "Q10.Which of the following tools can be used with TypeScript for code bundling?",
        choices: ["A) Node.js", "B) Webpack", "C) Gulp", "D) Both B and C"],
        type: "list"
        // correct_answer10:"D) Both B and C"
    },
    {
        name: "answer10",
        message: "Q11.How does TypeScript improve code maintainability?",
        choices: ["A) By providing runtime type checks",
            "B) By enforcing coding standards",
            "C) By allowing optional static typing and interfaces",
            "D) By making code asynchronous"],
        type: "list"
        // correct_answer11:"C) By allowing optional static typing and interfaces"
    },
    {
        name: "answer11",
        message: "Q12.Which of the following TypeScript features allows defining a variable that can hold more than one type?",
        choices: ["A) Union types", "B) Intersection types", "C) Enums", "D) Generics"],
        type: "list"
        // correct_answer12:"A) Union types"
    },
    {
        name: "answer12",
        message: "Q13.What is the TypeScript configuration file called?",
        choices: ["A) config.json", "B) package.json", "C) tsconfig.json", "D) typescript.json"],
        type: "list"
        // correct_answer13:"C) tsconfig.json"
    },
    {
        name: "answer13",
        message: "Q14.Which TypeScript feature is used to handle multiple types in a single function or class?",
        choices: ["A) Modules", "B) Generics", "C) Namespaces", "D) Interfaces"],
        type: "list"
        // correct_answer14:"B) Generics"
    },
    {
        name: "answer14",
        message: "Q15.Can TypeScript be used for developing both frontend and backend applications?",
        choices: ["A)Yes", "B)No"],
        type: "list"
        // correct_answer15:"A)Yes"
    }]);
let answers = [quizQuestions.answer0, quizQuestions.answer1, quizQuestions.answer2, quizQuestions.answer3, quizQuestions.answer4, quizQuestions.answer5, quizQuestions.answer6, quizQuestions.answer7, quizQuestions.answer8, quizQuestions.answer9, quizQuestions.answer10, quizQuestions.answer11, quizQuestions.answer12, quizQuestions.answer13, quizQuestions.answer14];
let correct_answers = [
    "B) A superset of JavaScript that adds static types",
    "C) Microsoft",
    "C) Static type definitions",
    "A) .ts",
    "B) To add static type checking for better code quality",
    "A) By using the tsc (TypeScript Compiler)",
    "B) Static typing",
    "C) Both A and B",
    "B)No",
    "D) Both B and C",
    "C) By allowing optional static typing and interfaces",
    "A) Union types",
    "C) tsconfig.json",
    "B) Generics",
    "A)Yes"
];
let score = 0;
for (let i = 0; i < 15; i++) {
    if (answers[i] == correct_answers[i]) {
        score++;
        console.log(chalk.bold.italic.green(`Your Answer ${i + 1} is Correct`));
    }
    else {
        console.log(chalk.bold.italic.red(`Oops! Your Answer ${i + 1} is wrong.The Correct Answer is ${correct_answers[i]}`));
    }
}
console.log(chalk.bold.bgBlueBright(`Your score is ${score}/15`));
