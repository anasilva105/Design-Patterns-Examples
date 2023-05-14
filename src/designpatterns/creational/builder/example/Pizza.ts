class Pizza {
    private size: string;
    private dough: string;
    private sauce: string;
    private toppings: string[];
    private cheese: string;

    constructor(){
        this.size = "";
        this.dough = "";
        this.cheese = "";
        this.sauce = "";
        this.toppings = [];
    }

    setSize(size: string): void {
        this.size = size;
    }

    getSize(): string {
        return this.size;
    }

    getDough(): string {
        return this.dough;
    }

    setDough(dough: string): void {
        this.dough = dough;
    }

    getSauce(): string {
        return this.sauce;
    }
    
    setSauce(sauce: string): void {
        this.sauce = sauce;
    }

    getToppings(): string[] {
        return this.toppings;
    }
    
    setToppings(toppings: string[]): void {
        this.toppings = toppings;
    }

    getCheese(): string {
        return this.cheese;
    }
    
    setCheese(cheese: string): void {
        this.cheese = cheese;
    }
}
export default Pizza;