import Pizza from "./Pizza";
import PizzaBuilder from "./PizzaBuilder";

class HawaiianPizzaBuilder implements PizzaBuilder {

    private pizza: Pizza;

    constructor(){
        this.pizza = new Pizza();
    }

    setSize(size: string): void {
        this.pizza.setSize(size);
    }

    buildDough(): void {
        console.log("> Building the dough...");
        this.pizza.setDough("Yeasted");
    }

    buildSauce(): void {
        console.log("> Adding the sauce...");
        this.pizza.setSauce("Tomato");
    }

    buildToppings(): void {
        console.log("> Adding the toppings...");
        this.pizza.setToppings(["Extra Mozarella Cheese", "Pineapple", "Ham"])
    }

    buildCheese(): void {
        console.log("> Adding the cheese...");
        this.pizza.setCheese("Mozarella");
    }

    getPizza(): Pizza {
        console.log("> Pizza is ready...");
        return this.pizza;
    }
}
export default HawaiianPizzaBuilder;