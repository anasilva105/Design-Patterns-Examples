abstract class Shape {
    private x!: number;
    private y!: number;
    private color!: string;

    constructor(source?: Shape){
        if(source){
            this.x = source.x;
            this.y = source.y;
            this.color = source.color;
        }
    }

    setX(x: number): void {
        this.x = x;
    }

    getX(): number {
        return this.x;
    }

    setY(y: number): void {
        this.y = y;
    }

    getY(): number {
        return this.y;
    }

    setColor(color: string): void {
        this.color = color;
    }

    getColor(): string {
        return this.color;
    }

    abstract clone(): Shape;
}
export default Shape;