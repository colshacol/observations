
export function killProcesses(processes: Object[]) {
  console.log(`[Observations:] Killing ${processes.length} processes.`)
  !!processes.length && processes.map((process: any) => {
    process.kill('SIGHUP')
  })
}