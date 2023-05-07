import AirMail from "./example/AirMail";
import GroundMail from "./example/GroundMail";
import Mail from "./example/Mail";

export function init(){
    console.log("Factory Method running...");
    const air_mail_delivery: Mail = new AirMail();
    air_mail_delivery.sendMail();

    const ground_mail_delivery_options = ["train", "truck"];
    ground_mail_delivery_options.forEach((mail: string) => new GroundMail().sendMail(mail));
}