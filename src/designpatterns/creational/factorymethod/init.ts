import AirMail from "./example/AirMail";
import GroundMail from "./example/GroundMail";
import Mail from "./example/Mail";
import SeaMail from "./example/SeaMail";

export function init(){
    console.log("Design Pattern: Factory Method running...");
    const air_mail_delivery: Mail = new AirMail();
    air_mail_delivery.sendMail();

    const ground_mail_delivery_options = ["train", "truck"];
    ground_mail_delivery_options.forEach((mail: string) => new GroundMail().sendMail(mail));

    const sea_mail_delivery: Mail = new SeaMail();
    sea_mail_delivery.sendMail();
}