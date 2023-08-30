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
console.log(isRalfCoach); // This console.log results in yellow

console.log(isRalfCoach ? "true" : "false"); // this is white
