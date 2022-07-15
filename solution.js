function CalculateBMI(firstName, weight, height) {
  const BMI = weight / (height * height);
  const result1 = firstName + ": " + BMI.toFixed(3);
  return result1;
}

console.log(CalculateBMI("John", 96, 1.78));
console.log(CalculateBMI("sharma", 76, 1.68));
console.log(CalculateBMI("noah", 46, 1.48));

//whoIsBiggest
function whoIsBigger(name1, bmi1, name2, bmi2) {
  if (bmi1 > bmi2) {
    console.log(
      `${name1} has bmi ${bmi1} hence is bigger than ${name2} with bim ${bmi2}`
    );
  } else if (bmi2 > bmi1) {
    console.log(
      `${name2} has bmi ${bmi2} hence is bigger than ${name1} with bim ${bmi1}`
    );
  }
}

whoIsBigger("nina", 16.8794, "noah", 22.142);
whoIsBigger("steve", 26.8794, "noah", 22.142);
whoIsBigger("steve", 16.8794, "jay", 20.142);

//using pervoius functions

function whoisBiggest(name1, weight1, height1, name2, weight2, height2) {
  const bmi1 = CalculateBMI("lara", 75, 1.75);
  const bmi2 = CalculateBMI("anna", 68, 1.68);

  const FinalResult = whoIsBigger("lara", bmi1, "anna", bmi2);
  return FinalResult;
}

whoisBiggest("lara", 75, 1.75, "anna", 68, 1.68);
