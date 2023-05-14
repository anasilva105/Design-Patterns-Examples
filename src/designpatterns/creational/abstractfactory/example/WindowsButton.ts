import Button from "./Button";

class WindowsButton implements Button {
    private button_name: string;
    private num_of_clicks: number;
    constructor(button_name?: string){
        console.log("Created a Windows Button...");
        this.button_name = button_name ? button_name : "";
        this.num_of_clicks = 0;
    }

    onClick(): void {
        console.log("Clicked on Window Button...");
        this.num_of_clicks++;
        console.log(`Windows button${this.button_name ? ' ' + this.button_name : ''} has been clicked` + 
        ` ${this.num_of_clicks} time${this.num_of_clicks > 1 ? 's': ''}.`);
    }
}
export default WindowsButton;