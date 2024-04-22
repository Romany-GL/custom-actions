const core = require('@actions/core');
const github = require('@actions/github');

try {
  const nameToGreet = core.getInput('your-name');
  console.log(`Hello ${nameToGreet}!`);

  const time = new Date().toLocaleTimeString();
  console.log(`The time is ${time}`);

  const payload = JSON.stringify(github.context.payload, null, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
