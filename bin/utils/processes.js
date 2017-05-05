"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function killProcesses(processes) {
    console.log(`[Observations:] Killing ${processes.length} processes.`);
    !!processes.length && processes.map((process) => {
        process.kill('SIGHUP');
    });
}
exports.killProcesses = killProcesses;
