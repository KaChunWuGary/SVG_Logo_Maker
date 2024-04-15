const inquirer = require('inquirer');
const fs = require('fs');
const shapeSelected = require('./lib/shapes.js');

//prompts on the inquirer
const questions = [
    "What are the 3 letters on your logo?",
    "What color are the letters?(color word or hexadecimal number is ok)",
    "What shape would you like?",
    "What color is the shape?(color word or hexadecimal number is ok)",
];

//next 3 functions are to modify the logo according to user inputs
function modifyingCircles(shapeConstructors) {
    const testing = fs.readFileSync( './examples/circle.svg' , 'utf8')     
    const modifiedData = testing
    .replace('<text x="100" y="120" font-size="65" text-anchor="middle" fill="white">',`<text x="100" y="120" font-size="65" text-anchor="middle" fill="${shapeConstructors.text_color}">`)
    .replace('<circle cx="100" cy="100" r="75" fill="green" />',`<circle cx="100" cy="100" r="75" fill="${shapeConstructors.shape_color}" />`)
    .replace('SVG',`${shapeConstructors.text}`);
    fs.writeFile('./examples/logo.svg', modifiedData, 'utf8', (err) => {     
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated logo.svg!`);
    })  
    return modifiedData;
}

function modifyingTriangles(shapeConstructors) {
    const testing = fs.readFileSync( './examples/triangle.svg' , 'utf8')      
    const modifiedData = testing
    .replace('<text x="125" y="150" font-size="60" text-anchor="middle" fill="white">',`<text x="125" y="150" font-size="60" text-anchor="middle" fill="${shapeConstructors.text_color}">`)
    .replace('<polygon points="123,10 227.8,190 20,190" style="fill:lime" />',`<polygon points="123,10 227.8,190 20,190" style="fill:${shapeConstructors.shape_color}" />`)
    .replace('SVG',`${shapeConstructors.text}`);
    fs.writeFile('./examples/logo.svg', modifiedData, 'utf8', (err) => {            
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated logo.svg!`);
    })   
    return modifiedData
}

function modifyingSquares(shapeConstructors) {
    const testing = fs.readFileSync( './examples/square.svg' , 'utf8')       
    const modifiedData = testing
    .replace('<text x="150" y="140" font-size="130" text-anchor="middle" fill="white">',`<text x="150" y="140" font-size="130" text-anchor="middle" fill="${shapeConstructors.text_color}">`)
    .replace('<rect width="100%" height="100%" fill="red" /> ',`<rect width="100%" height="100%" fill="${shapeConstructors.shape_color}" />`)
    .replace('SVG',`${shapeConstructors.text}`);
    fs.writeFile('./examples/logo.svg', modifiedData, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated logo.svg!`);
    })  
    return modifiedData;
}
//the first time that starts when index.js is run. 
async function init() {
    try {
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
            choices: ['Triangle','Circle', 'Square'] 
        },
        { 
            type: 'input', 
            name: 'shape_color', 
            message: `${questions[3]}` 
        },
    ]);
    //uses user input to select for the class in shapes.js
    const shape = answers.shape;
    const shapeType = new shapeSelected.Shapes(shape);    
    const shapeConstructors = new shapeType(answers.logo_text,answers.text_color,answers.shape_color);
    
    if(shape == 'Circle'){
        modifyingCircles(shapeConstructors);
    }
    else if (shape == 'Triangle') {
        modifyingTriangles(shapeConstructors);
    }
    else if (shape == 'Square'){    
        modifyingSquares(shapeConstructors);
    }
    }
    catch (err){
        console.log(err);
    }
}

init();

module.exports = {
    modifyingCircles,
    modifyingSquares,
    modifyingTriangles,
}

//not sure why the readfile in this case doesn't work. Going to save this to ask the instructor
// function modifyingCircles() {
    //     const testing = fs.readFile( './examples/test.svg' , 'utf8',  (err, data) => {
    //         console.log(data);
    //         if (err) {
    //             console.error(err);
    //             return;
    //         }
            
    //         const modifiedData = data
    //         .replace(/<text.*?fill="white".*?>/,`<text fill="${shapeConstructors.text_color}">`)
    //         .replace(/<circle.*?fill="green".*?>/,`<circle fill="${shapeConstructors.shape_color}">`)
    //         .replace('SVG',`${shape.text}`);
    //         console.log(modifiedData);
    //         console.log("insidetest2");
    //         fs.writeFile('./examples/logo.svg', modifiedData, 'utf8', (err) => {
                
    //             if (err) {
    //                 console.error(err);
    //                 return;
    //             }
    //             console.log(`Generated logo.svg!`);
    //         })
    //         console.log(testing);
    //     })
       
    
    // }

