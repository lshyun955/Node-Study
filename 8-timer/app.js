let num = 1;

const interval = setInterval(() => {
  console.log(num++);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 6000);
