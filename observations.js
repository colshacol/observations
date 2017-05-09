const Observations = require('./bin')

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