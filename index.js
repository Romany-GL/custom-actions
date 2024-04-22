const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('your-name');
  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toLocaleTimeString();
  console.log(`The time is ${time}`);

  // Access the event payload
  const payload = JSON.stringify(github.context.payload, null, 2);

  core.setOutput('time', time);

  // Set the values as environment variables, so they can be used in subsequent steps
  // echo $GREETING_NAME in the workflow will output the value of the nameToGreet input
  // echo $GREETING_TIME in the workflow will output the value of the time variable
  core.exportVariable('GREETING_NAME', nameToGreet);
  core.exportVariable('GREETING_TIME', time);

  core.startGroup('Logging the event payload');
  console.log(`The event payload: ${payload}`);
  core.endGroup();

  core.info('This is a log message');
  core.warning('This is a warning message');
  core.error('This is an error message');
} catch (error) {
  core.setFailed(error.message);
}
