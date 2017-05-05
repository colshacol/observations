const Observations = require('./bin/index')

Observations.register({
  name: 'js',
  match: ['./**/*.js'],
  ignore: './watch.config.js',
  persistent: true,
  execOnInit: false,

  onError(error) {
    console.log(`Got an error, dude!`)
  },

  onOutput(output) {
    console.log(`Got output, dude!`)
  },

  onChange(observation) {
    // Here you have the potential to do cool stuff
    // to generate a dynamic set of commands to be
    // executed by the observation.
    observation.exec([
      'ls'
    ])
  }
})



Observations.register({
  name: 'css',
  match: ['./**/*.css'],
  execOnInit: false,

  onError(error) {
    console.log(`[Error:1] ${error}`)
  },

  onOutput(output) {
    console.log(`[Output:1] ${output}`)
  },

  onChange(observation) {
    observation.exec([
      'ls -a src'
    ])
  }
})