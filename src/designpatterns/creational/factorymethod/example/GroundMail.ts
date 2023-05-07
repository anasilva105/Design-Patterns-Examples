import Mail from "./Mail";
import Train from "./Train";
import Transport from "./Transport";
import Truck from "./Truck";

console.log("Concrete Creator Class: GroundMail");
class GroundMail extends Mail {
    public deliverMethod(transport: string): Transport | undefined {
        if(transport === "train") return new Train();
        else if(transport == "truck") return new Truck();
        else return undefined;
    }
}

export default GroundMail;