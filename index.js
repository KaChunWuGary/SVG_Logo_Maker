const inquirer = require('inquirer');
const fs = require('fs');
const shapeSelected = require('./lib/shapes.js');

const questions = [
    "What are the 3 letters on your logo?",
    "What color are the letters?(color word or hexadecimal number is ok)",
    "What shape would you like?",
    "What color is the shape?(color word or hexadecimal number is ok)",
];

function modifyingCircles(shapeConstructors) {
    const testing = fs.readFileSync( './examples/test.svg' , 'utf8')  
    console.log(testing);        
    const modifiedData = testing
    .replace('/<text.*?fill="white".*?>/',`<text fill="${shapeConstructors.text_color}">`)
    .replace('/<circle.*?fill="green".*?>/',`<circle fill="${shapeConstructors.shape_color}">`)
    .replace('SVG',`${shapeConstructors.text}`);
    console.log(modifiedData);
    fs.writeFile('./examples/logo.svg', modifiedData, 'utf8', (err) => {
            
        if (err) {
            console.error(err);
            return;
        }
            console.log(`Generated logo.svg!`);
    })
    
}


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
            choices: ['Triangle','Circle', 'Square'] 
        },
        { 
            type: 'input', 
            name: 'shape_color', 
            message: `${questions[3]}` 
        },
    ]);
    const shape = answers.shape;
    const shapeType = new shapeSelected.Shapes(shape);    
    console.log(shapeType);
    const shapeConstructors = new shapeType(answers.logo_text,answers.text_color,answers.shape_color);
    console.log(shapeConstructors);
    modifyingCircles(shapeConstructors);
    
}

init();




    // //need to figure out how to readfile and then modify the file using it. 
    // const shapeSelected = 'placehold'//insert correct file here;
    // //null is the placeholder, since we need the 3 parameter of stringify
    // //2 is the number of spaces when json stringifys
    // // ex: const reviewString = JSON.stringify(newReview,null,2);
    // const fileContent = JSON.stringify(shapeSelected);



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

