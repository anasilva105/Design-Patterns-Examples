import Button from "./example/Button";
import GUIFactory from "./example/GUIFactory";
import MacFactory from "./example/MacFactory";
import TextArea from "./example/TextArea";
import WindowsFactory from "./example/WindowsFactory";

export function init(){
    console.log("Design Pattern: Absctract Factory running...");
    let operating_system: string = "Windows"; 
    const setAppConfig: (os: string) => GUIFactory | undefined = (os: string) => {
        if(os.toLowerCase() === "windows")
            return new WindowsFactory();
        else if(os.toLowerCase() === "mac")
            return new MacFactory();
        else console.error("Invalid Operating System");
    }
    const startApp: (appConfig: GUIFactory, button_name?: string ) => void = (appConfig: GUIFactory, button_name?: string) => {
        if(appConfig){
            let app: App = new App(appConfig);
            app.createUI(button_name);
            app.handleButtonOnClick();
            app.handleTextAreaOnChange();
            app.handleButtonOnClick();
        }  
    }

    let appConfig: GUIFactory | undefined = setAppConfig(operating_system);
    if(appConfig) startApp(appConfig, "Submit");
    
    operating_system = "Mac";
    appConfig = setAppConfig(operating_system);
    if(appConfig) startApp(appConfig);
}

class App {
    private factory: GUIFactory;
    private button: Button | undefined;
    private textArea: TextArea | undefined;
    constructor(factory: GUIFactory){
        this.factory = factory;
    }

    createUI(button_name?: string){
        this.button = this.factory.createButton(button_name);
        this.textArea = this.factory.createTextArea();
    }

    handleButtonOnClick(){
        if(this.button) this.button.onClick();
    }

    handleTextAreaOnChange(){
        if(this.textArea) this.textArea.onChange();
    }
}