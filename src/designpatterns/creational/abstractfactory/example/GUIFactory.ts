import Button from "./Button";
import TextArea from "./TextArea";

interface GUIFactory {
    createButton: (button_name?: string) => Button
    createTextArea: () => TextArea
}
export default GUIFactory;