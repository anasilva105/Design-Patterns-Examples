import Transport from "./Transport";

class Truck implements Transport {
    deliver(): void {
        console.log('Delivering mail via truck...');
    };
}
export default Truck;