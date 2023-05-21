import Shape from "./Shape";

class Circle extends Shape {
    private radius!: number;

    constructor(source?: Circle){
        if(source){
            super(source);
            this.radius = source.radius;
            return;
        }
        super(undefined);
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    getRadius(): number {
        return this.radius;
    }

    clone(): Shape {
        console.log("Creating a circle clone...");
        return new Circle(this);
    }
}
export default Circle;