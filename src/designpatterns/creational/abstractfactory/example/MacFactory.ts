import GUIFactory from "./GUIFactory";
import MacButton from "./MacButton";
import MacTextArea from "./MacTextArea";

class MacFactory implements GUIFactory {
    createButton(){
        return new MacButton();
    }
    createTextArea(){
        return new MacTextArea();
    }
}
export default MacFactory;