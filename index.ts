import { printSummary2 } from "./components/print";
import { readAssets } from "./components/readFile";
import { serverSocket } from "./services/webSockets";
console.log("Hello via Bun!");

function printSummary(summary: string): string {
    return summary + summary;
}


console.log("print Summary" + printSummary("Hoang"));
console.log("print Summary" + printSummary2("Lam"));

readAssets();

// Websocket Server
console.log("Server is running on port:", serverSocket.port);
