import TextArea from "./TextArea";

class WindowsTextArea implements TextArea {
    constructor() {
        console.log("Created a Windows Text Area...");
    }

    onChange(): void {
        console.log("Changed the text on the Window Text Area...");
    }
}
export default WindowsTextArea;