function longRunningTask() {
  //오래 걸리는 작업
  console.log('done');
}

console.log('start');
setTimeout(longRunningTask, 0);
console.log('다음 작업');
