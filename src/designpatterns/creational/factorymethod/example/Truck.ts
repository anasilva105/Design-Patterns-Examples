import Transport from "./Transport";

class Truck implements Transport {
    deliver() {
        console.log('Delivering mail via truck...');
    };
}
export default Truck;