console.log("logging...");
console.clear();

// log level
console.log("log"); // 개발
console.error("error"); // 정보
console.info("info"); // 경고
console.warn("warn"); // 에러, 사용자 에러, 시스템 에러

// assert
console.assert(2 === 3, "not same");
console.assert(2 === 2, "not same");

// print object
const student = { name: "lee", age: 28, company: { name: "AC" } };
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2 });

// measuring time
console.time("for loop");
for (let i = 0; i < 100; i++) {
  i++;
}
console.timeEnd("for loop");

// counting
function a() {
  console.count("a function");
}
a();
a();

// trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log("f3");
  console.trace();
}
f1();
