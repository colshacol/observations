#!/usr/bin/env node
const childProcess = require('child_process')
const chokidar = require('chokidar')

import { killProcesses, dissectCommand, applyEventHandlers } from './utils/processes'
import { defaultObservation, Observation } from './utils/observations'

function Observations() {
  return {
    register(observation: Observation) {
      const observable = { ...defaultObservation, ...observation }

      const observer = chokidar.watch(observable.match, {
        ignored: observable.ignore,
        persistent: observable.persistent,
      })
      
      let processes = []
      observer.on('change', (path: any) => {
        killProcesses(processes)

        observable.handleChange({ path, exec(commands) {
          processes = commands.map((command: string) => {
            const [ cmd, args ] = dissectCommand(command)
            const process = childProcess.spawn(cmd, args)
            applyEventHandlers(process)(observable)
            return process
          })
        }})
      })
    }
  }
}

module.exports = Observations()


