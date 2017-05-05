<div style='text-align: center'>
  <h1>Observations</h1>
  <p style="margin-top: 20px">
    A <em>multi-tasking</em> file watcher that
    gives you <strong>ultimate</strong> control.
  </p>
</div>

```javascript
import Observations from 'observations'

Observations.register({
  name: 'js-watcher',
  match: ['./**/*.js', './**/*.jsx'],
  ignore: './watch.config.js',
  persistent: true,

  onError(error) {
    console.log(`Got an error, dude!`)
  },

  onOutput(output) {
    console.log(`Got output, dude!`)
  },

  onChange(data) {
    data.exec([
      'echo $VIRTUAL_HOST',
      'ls ./public/css',
      'webpack'
    ])
  }
})
```