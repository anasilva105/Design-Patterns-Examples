import Transport from "./Transport";

class Train implements Transport {
    deliver(): void {
        console.log('Delivering mail via train...');
    };
}
export default Train;