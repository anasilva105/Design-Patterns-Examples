import Pizza from "./Pizza"

interface PizzaBuilder {
    setSize(size: string): void;
    buildDough(): void;
    buildSauce(): void;
    buildToppings(): void;
    buildCheese(): void;
    getPizza(): Pizza;
}
export default PizzaBuilder;