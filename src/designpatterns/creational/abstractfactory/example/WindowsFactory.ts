import GUIFactory from "./GUIFactory";
import WindowsButton from "./WindowsButton";
import WindowsTextArea from "./WindowsTextArea";

class WindowsFactory implements GUIFactory {
    createButton(button_name?: string){
        return new WindowsButton(button_name);
    }
    createTextArea(){
        return new WindowsTextArea();
    }
}
export default WindowsFactory;