/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

function calculateTime() {
  waitOneSecond()
    .then(() => {
      console.log("First promise resolved after 1 seconds");
      return waitTwoSecond();
    })
    .then(() => {
      console.log("Second promise resolved after 2 seconds");
      return waitThreeSecond();
    })
    .then(() => {
      console.log("Third promise resolved after 3 seconds");
    })
    .then(() => {
      console.log("Total time taken is 6 seconds");
    });
}

calculateTime();
