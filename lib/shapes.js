

class Shapes{
    constructor(selectedShape){
        class Triangle {
            constructor(text,text_color,shape_color){
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
        }
        
        class Square{
            constructor(text,text_color,shape_color){
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
        }
        
        class Circle {
            constructor(text,text_color,shape_color){
                this.text = text;
                this.text_color = text_color;
                this.shape_color = shape_color;
            }
            
        }

        if (selectedShape === "Triangle"){
            return Triangle
        } else if (selectedShape === "Square") {
            return Square;
        } else if (selectedShape === "Circle") {
            return Circle;
        } else {
            return null; // Handle the case when selectedShape is not recognized
        }

    }
}






module.exports = {
    Shapes,
}