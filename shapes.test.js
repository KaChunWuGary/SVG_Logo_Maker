const index = require("./index.js");
const shapeSelected = require('./lib/shapes.js');



//my code is set up so that you have to input all 3 values to test instead of just 1 of the values. 
describe("shape", () => {
    describe("triangle",() =>{
        it("should make a triangle logo with what the user inputs", () => {
            const shape = "Triangle";
            const shapeType = new shapeSelected.Shapes(shape);
            const shapeConstructors = new shapeType("fff","blue","black");
            expect(index.modifyingTriangles(shapeConstructors)).toEqual('<svg version=\"1.1\"\r\n    width=\"300\" height=\"200\"\r\n    xmlns=\"http://www.w3.org/2000/svg\">\r\n    <polygon points=\"123,10 227.8,190 20,190\" style=\"fill:black\" />\r\n    <text x=\"125\" y=\"150\" font-size=\"60\" text-anchor=\"middle\" fill=\"blue\">fff</text>\r\n</svg>\r\n');
        })
    })
    describe("square",() =>{
        it("should make a square logo with what the user inputs", () => {
            const shape = "Square";
            const shapeType = new shapeSelected.Shapes(shape);
            const shapeConstructors = new shapeType("fff","blue","black");
            expect(JSON.stringify(index.modifyingSquares(shapeConstructors))).toEqual('\"<svg version=\\\"1.1\\\"\\r\\n    width=\\\"300\\\" height=\\\"200\\\"\\r\\n    xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n    <rect width=\\\"100%\\\" height=\\\"100%\\\" fill=\\\"black\\\" />\\r\\n    <text x=\\\"150\\\" y=\\\"140\\\" font-size=\\\"130\\\" text-anchor=\\\"middle\\\" fill=\\\"blue\\\">fff</text>\\r\\n</svg>\\r\\n\"')
        ;
        })
    })
    describe("circle",() =>{
        it("should make a circle logo with what the user inputs", () => {
            const shape = "Circle"
            const shapeType = new shapeSelected.Shapes(shape);
            const shapeConstructors = new shapeType("fff","blue","black");
            expect(JSON.stringify(index.modifyingCircles(shapeConstructors))).toEqual('\"<svg version=\\\"1.1\\\"\\r\\n    width=\\\"300\\\" height=\\\"200\\\"\\r\\n    xmlns=\\\"http://www.w3.org/2000/svg\\\">\\r\\n    <circle cx=\\\"100\\\" cy=\\\"100\\\" r=\\\"75\\\" fill=\\\"black\\\" />\\r\\n    <text x=\\\"100\\\" y=\\\"120\\\" font-size=\\\"65\\\" text-anchor=\\\"middle\\\" fill=\\\"blue\\\">fff</text>\\r\\n</svg>\"');
        })
    })
})
