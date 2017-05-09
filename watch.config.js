const Observations = require('./bin/index')

Observations.register({
  name: 'ts-watcher',
  match: ['./src/**/*.ts'],
  persistent: true,
  execOnInit: false,

  handleError(error) {
    console.log(`Got an error, dude!`)
  },

  handleOutput(output) {
    console.log(`Got output, dude!`)
  },

  handleChange(observation) {
    observation.exec([
      'tsc -p ./tsconfig.json'
    ])
  }
})



Observations.register({
  name: 'css',
  match: ['./**/*.css'],
  execOnInit: false,

  handleError(error) {
    console.log(`[Error:1] ${error}`)
  },

  handleOutput(output) {
    console.log(`[Output:1] ${output}`)
  },

  handleChange(observation) {
    observation.exec([
      'ls -a src'
    ])
  }
})