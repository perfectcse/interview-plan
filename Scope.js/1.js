var a = 10;

function test() {
  console.log(a);
}

function test2() {
  var a = 20;
  test();
}

test2();