import Transport from "./Transport";

class Boat implements Transport {
    deliver(): void {
        console.log('Delivering mail via boat...');
    }
}

export default Boat;