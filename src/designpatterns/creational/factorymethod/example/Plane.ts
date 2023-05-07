import Transport from "./Transport";

class Plane implements Transport {
    deliver(): void {
        console.log('Delivering mail via plane...');
    };
}

export default Plane;