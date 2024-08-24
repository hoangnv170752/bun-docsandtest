import { printSummary2 } from "./components/print";
console.log("Hello via Bun!");

function printSummary(summary: string): string {
    return summary + summary;
}


console.log("print Summary" + printSummary("Hoang"));
console.log("print Summary" + printSummary2("Lam"));