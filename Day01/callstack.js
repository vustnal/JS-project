function first() {
  second();
  console.log('첫번째');
}
function second() {
  third();
  console.log('second');
}
function third() {
  console.log('third');
}
first();
