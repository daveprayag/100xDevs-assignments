/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleepingUsingPromise(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds);
  });
}

async function sleep(seconds) {
  console.log("Sleeping...");
  await sleepingUsingPromise(seconds);
  console.log("Just woke up");
}

sleep(2000);
