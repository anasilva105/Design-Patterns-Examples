import Transport from "./Transport";

class Train implements Transport {
    deliver() {
        console.log('Delivering mail via train...');
    };
}
export default Train;