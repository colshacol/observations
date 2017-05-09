
export function killProcesses(processes: Object[]) {
  console.log(`\n\n[Observations:Generic] Killing ${processes.length} processes.\n\n`)
  !!processes.length && processes.map((process: any) => {
    process.kill('SIGHUP')
  })
}

export const dissectCommand = (command: string): any[] => {
  const pieces: string[] = command.split(' ')
  return [pieces[0], pieces.slice(1)]
}

export const applyEventHandlers = (process: any): any => (observable: any): any => {
  process.stdout.on('data', observable.handleOutput)
  process.stderr.on('data', observable.handleError)
  process.on('close', (info) => observable.onProcessClose(info))
  return process
}