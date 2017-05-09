
export const defaultObservation = {
  match: ['./**/*'],
  ignore: '',
  persistent: true,
  onProcessClose(code) {
    console.log(`\n\n[Observations:Generic] Process closed with status (${code}).\n\n`)
  },
  handleChange(data) {
    console.log('\n\n[Observations:Generic] Matched file change: ' + data + '\n\n')
  },
  handleError(data) {
    console.log('\n\n[Observations:Generic] Process encountered error: ' + data + '\n\n')
  },
  handleOutput(data) {
    console.log('\n\n[Observations:Generic] Process gave output: \n\n' + data + '\n\n')
  }
}

export interface Observation {
  onProcessClose?: (info: any) => any,
  handleChange?: (options: any) => any,
  handleOutput?: (output: any) => any,
  handleError?: (error: any) => any,
  name?: string,
  match: string[],
  ignore?: string[],
  persistent?: boolean,
}