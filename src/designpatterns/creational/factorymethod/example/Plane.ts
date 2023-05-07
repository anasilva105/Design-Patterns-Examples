import Transport from "./Transport";

class Plane implements Transport {
    deliver() {
        console.log('Delivering mail via plane...');
    };
}

export default Plane;