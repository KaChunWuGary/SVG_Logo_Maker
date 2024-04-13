const inquirer = require('inquirer');
const fs = require('fs').promises;


const questions = [
    "What are the 3 letters on your logo?",
    "What color are the letters?(color word or hexadecimal number is ok)",
    "What shape would you like?",
    "What color is the shape?(color word or hexadecimal number is ok)",
];

async function init() {
    const answers = await inquirer.prompt([
        { 
            type: 'input', 
            name: 'logo_text', 
            message: `${questions[0]}` 
        },
        { 
            type: 'input', 
            name: 'text_color', 
            message: `${questions[1]}` 
        },
        { 
            type: 'list', 
            name: 'shape',
            message: `${questions[2]}`,
            choices: ['triangle','circle', 'square'] 
        },
        { 
            type: 'input', 
            name: 'shape_color', 
            message: `${questions[3]}` 
        },
    ]);
    console.log(answers);
    
    const fileName = `${answers.shape}.svg`;

    try {
        await fs.writeFile(fileName, answers, 'utf8');
        console.log(`Successfully created ${fileName}!`);
    } catch (err) {
        console.error(err);
    }
}

  
init();

