import Mail from "./Mail";
import Boat from "./Boat";
import Transport from "./Transport";

console.log("Concrete Creator Class: SeaMail");
class SeaMail extends Mail {
    public deliverMethod(): Transport {
        return new Boat();
    }
}

export default SeaMail;