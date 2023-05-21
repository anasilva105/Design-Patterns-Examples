import Shape from "./Shape";

class Rectangle extends Shape {
    private width!: number;
    private height!: number;

    constructor(source?: Rectangle){
        if(source){
            super(source);
            this.width = source.width;
            this.height = source.height;
            return;
        }
        super(undefined);
    }

    setWidth(width: number): void {
        this.width = width;
    }

    getWidth(): number {
        return this.width;
    }

    setHeight(height: number): void {
        this.height = height;
    }

    getHeight(): number {
        return this.height;
    }

    clone(): Shape {
        console.log("Creating a rectangle clone...");
        return new Rectangle(this);
    }
}
export default Rectangle;