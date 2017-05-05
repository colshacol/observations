"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require('child_process');
const chokidar = require('chokidar');
const processes_1 = require("./utils/processes");
function Observations() {
    return {
        register(observation) {
            let processes = [];
            const observer = chokidar.watch(observation.match, {
                ignored: observation.ignore || '',
                persistent: observation.persistent || true,
            });
            observer.on('change', (path) => {
                processes_1.killProcesses(processes);
                observation.onChange({ path, exec(commands) {
                        processes = commands.map((command) => {
                            const cmd = command.split(' ');
                            console.log(cmd[0], cmd.slice(1));
                            const process = childProcess.spawn(cmd[0], cmd.slice(1));
                            process.stdout.on('data', (data) => {
                                observation.onOutput(`${data}`);
                            });
                            process.stderr.on('data', (error) => {
                                observation.onError(`${error}`);
                                console.log(`${error}`);
                            });
                            process.on('close', (code) => {
                                console.log(`[Observations:] (${command}) closed with code ${code}.`);
                            });
                            return process;
                        });
                    } });
            });
        }
    };
}
module.exports = Observations();
