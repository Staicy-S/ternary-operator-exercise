const person = {
  name: "Ralf",
  job: "Coach",
};
let isRalfCoach;
if (person.job === "Dancer") {
  isRalfCoach = true;
} else {
  isRalfCoach = false;
}
//console.log(isRalfCoach); // This console.log results in yellow
//console.log(isRalfCoach ? "true" : "false"); // this is white

const age = 19;
let stageOfLife;
if (age <= 14) {
  stageOfLife = "child";
} else if (age <= 18) {
  stageOfLife = "teenager";
} else {
  stageOfLife = "adult";
}
console.log(stageOfLife);

console.log(
  (stageOfLife = age <= 14 ? "child" : age <= 18 ? "teenager" : "adult")
);
// First part: is stageOfLife <= 14? If yes, print "child"
// Second part is executed when the first expression is false
// age <= 18 is asked, when first part false.
// Second part evaluates to true, then teenager is printed
// If age >18, adult is printed
