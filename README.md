<div style='text-align: center'>
  <h1>Observations</h1>
  <p style="margin-top: 20px">
    A <em>multi-tasking</em> file watcher that
    gives you <strong>ultimate</strong> control.
  </p>
</div>
</br>

_Don't try this at home. It isn't yet ready for your dirty hands._

```bash
$ yarn global add observations
```

```javascript
import Observations from 'observations'

Observations.register({
  name: 'js-watcher',
  match: ['./**/*.js', './**/*.jsx'],
  ignore: './watch.config.js',

  hanleError(error) {
    console.log(`Got an error, dude!`)
  },

  handleOutput(output) {
    console.log(`Got output, dude!`)
  },

  handleChange(change) {
    change.exec([
      'echo $VIRTUAL_HOST',
      'ls ./public/css',
      'webpack'
    ])
  }
})
```

```bash
$ observations
```

## API

## `name: string`
[*optional*] _Not yet used for anything._

## `match: string[]`
A glob of patterns to watch.

## `ignore: string[]`
[*optional*] A glob of a patterns to ignore.

## `persistent: boolean`
[*optional*] Whether or not the process should exit on its own or stay alive.

## `handleOutput: (x: string)`
[*optional*] A function to execute to handle process output.

## `handleError: (x: string)`
[*optional*] A function to execute when process throws an error.

## `handleChange: (x: string)`
[*optional*] A function to execute when a watched file changes.