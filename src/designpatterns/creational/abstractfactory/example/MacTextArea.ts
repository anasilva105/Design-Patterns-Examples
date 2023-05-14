import TextArea from "./TextArea";

class MacTextArea implements TextArea {
    constructor() {
        console.log("Created a Mac Text Area...");
    }

    onChange(): void {
        console.log("Changed the text on the Mac Text Area...");
    }
}
export default MacTextArea;