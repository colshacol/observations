#!/usr/bin/env node
const childProcess = require('child_process')
const chokidar = require('chokidar')

import { killProcesses, dissectCommand, applyEventHandlers } from './utils/processes'
import { defaultObservation } from './utils/observations'

interface Observation {
  onProcessClose?: (info: any) => any,
  handleChange?: (options: any) => any,
  handleOutput?: (output: any) => any,
  handleError?: (error: any) => any,
  name?: string,
  match: string[],
  ignore?: string[],
  persistent?: boolean,
}

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


