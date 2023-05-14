import Button from "./Button";

class MacButton implements Button {
    constructor(){
        console.log("Created a Mac Button...");
    }

    onClick(): void {
        console.log("Clicked on Mac Button...");
    }
}
export default MacButton;