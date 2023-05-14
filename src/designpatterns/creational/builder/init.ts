import Pizza from "./example/Pizza";
import Pizzeria from "./example/Pizzeria";

export function init(){
    console.log("Design Pattern: Builder running...");
    const pizzeria: Pizzeria = new Pizzeria();

    const [ margherita, hawaiian ]: string[] = pizzeria.getMenu();
    const [ small, medium, large ]: string[] = pizzeria.getPizzaSizes();

    const pizzaClient1: Pizza = pizzeria.orderPizza(margherita, small);
    console.log(`> Client 1 ordered pizza ${margherita} with size ${small}...`);
    console.log(`> Client 1 received the pizza with 
        ${pizzaClient1.getDough()} dough, 
        ${pizzaClient1.getSauce()} sauce, 
        ${pizzaClient1.getToppings().join(", ")} and 
        ${pizzaClient1.getCheese()} cheese.`
    );

    const pizzaClient2: Pizza = pizzeria.orderPizza(hawaiian, medium);
    console.log(`> Client 2 ordered pizza ${hawaiian} with size ${medium}...`);
    console.log(`> Client 2 received the pizza with 
        ${pizzaClient2.getDough()} dough, 
        ${pizzaClient2.getSauce()} sauce, 
        ${pizzaClient2.getToppings().join(", ")} and 
        ${pizzaClient2.getCheese()} cheese.`
    );

    const pizzaClient3: Pizza = pizzeria.orderPizza(hawaiian, large);
    console.log(`> Client 3 ordered pizza ${hawaiian} with size ${large}...`);
    console.log(`> Client 3 received the pizza with 
        ${pizzaClient3.getDough()} dough, 
        ${pizzaClient3.getSauce()} sauce, 
        ${pizzaClient3.getToppings().join(", ")} and 
        ${pizzaClient3.getCheese()} cheese.`
    );
}