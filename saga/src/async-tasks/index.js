export const task1 = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.random()
    if (random > 0.2) {
      resolve(random);
    } else {
      reject(new Error('Async task 1 failed.'));
    }
  }, 1000);
});

export const task2 = task1Result => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() > 0.2) {
      resolve({
        timestamp: new Date().getTime(),
        value: Math.floor(task1Result * 100)
      });
    } else {
      reject(new Error('Async task 2 failed.'))
    }
  }, 1000);
});
