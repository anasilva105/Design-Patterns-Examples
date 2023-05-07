import Transport from "./Transport";

console.log("Creator Class: Mail");
abstract class Mail {
    public abstract deliverMethod(transport?: string): Transport | undefined;

    public sendMail(ground_transport?: string): void {
        const transport: Transport | undefined = this.deliverMethod(ground_transport);
        if(transport) transport.deliver();
    }
}

export default Mail;