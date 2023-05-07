import Mail from "./Mail";
import Plane from "./Plane";
import Transport from "./Transport";

console.log("Concrete Creator Class: AirMail");
class AirMail extends Mail {
    public deliverMethod(): Transport {
        return new Plane();
    }
}

export default AirMail;