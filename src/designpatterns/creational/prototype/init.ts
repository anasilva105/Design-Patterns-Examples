import Circle from "./example/Circle";
import Rectangle from "./example/Rectangle";
import Shape from "./example/Shape";

export function init() {
    console.log("Design Pattern: Prototype running...");
    const arrayOfShapes: Shape[] = [];

    const circle: Circle = new Circle();
    circle.setX(10);
    circle.setY(20);
    circle.setColor("red");
    circle.setRadius(50);

    arrayOfShapes.push(circle);

    const circleCopy: Shape = circle.clone();
    arrayOfShapes.push(circleCopy);

    const rectangle: Rectangle = new Rectangle();
    rectangle.setX(90);
    rectangle.setY(30);
    rectangle.setColor("blue");
    rectangle.setWidth(100);
    rectangle.setHeight(120);

    arrayOfShapes.push(rectangle);

    console.log("Creating copies of all the shapes...");
    const shapeCopies: Shape[] = [];
    for(const shape of arrayOfShapes){
        shapeCopies.push(shape.clone());
    }
}