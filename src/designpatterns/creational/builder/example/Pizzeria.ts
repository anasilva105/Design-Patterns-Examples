import HawaiianPizzaBuilder from "./HawaiianPizzaBuilder";
import MargheritaPizzaBuilder from "./MargheritaPizzaBuilder";
import Pizza from "./Pizza";
import PizzaBuilder from "./PizzaBuilder";

class Pizzeria {

    private menu: {[key: string]: PizzaBuilder};
    private availableSizes: string[] = ["Small", "Medium", "Large"];
    constructor(){
        this.menu = {
            margherita: new MargheritaPizzaBuilder(),
            hawaiian: new HawaiianPizzaBuilder()
        }
    }

    getMenu(): string[]{
        return Object.keys(this.menu);
    }

    getPizzaSizes(): string[]{
        return this.availableSizes;
    }

    orderPizza(pizza: string, size: string): Pizza {
        console.log(`> ${size} ${pizza} pizza ordered...`);
        const order = new this.OrderPizza(this.menu[pizza]);
        const pizzaCooked: Pizza = order.cookPizza(size);
        return pizzaCooked;       
    }

    OrderPizza = class {
        private builder: PizzaBuilder;
        constructor(builder: PizzaBuilder){
            this.builder = builder;
        }
        cookPizza(size: string): Pizza {
            console.log("> Cooking the pizza started...");
            this.builder.setSize(size);
            this.builder.buildDough();
            this.builder.buildSauce();
            this.builder.buildToppings();
            this.builder.buildCheese();
            return this.builder.getPizza();
        }
    }
}
export default Pizzeria;