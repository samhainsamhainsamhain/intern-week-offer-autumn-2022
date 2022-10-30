function createCountdown(arg) {
  if (typeof arg === 'number' || arg < 0 || arg % 1 !== 0) arg = 0;
  let count = arg;

  return () => {
    if (count < 1) {
      return 0;
    } else {
      return count--;
    }
  };
}

const countdownFrom3 = createCountdown(obj);

countdownFrom3(); // 3
countdownFrom3(); // 2
countdownFrom3(); // 1

countdownFrom3(); // 0
countdownFrom3(); // 0
