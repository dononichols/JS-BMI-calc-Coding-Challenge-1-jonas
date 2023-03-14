//////////
// Coding Challenge #1

/*

Mark and John are trying to compare their BMI (body mass index), which is calculated using the formula:

BMI = mass/ height ** 2     =    mass / (height * height).

(mass in kg and height in meters).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMI's using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI'
containing information about whether Mark has a higher BMI than John.

TEST DATA 1 : Marks weights 78 kg and is 1.69 m tall.
    Johns weights 92 kg and is 1.92 m tall.

TEST DATA 2 : Marks weights 95 kg and is 1.88 m tall.
    Johns weights 85 kg and is 1.76 m tall.

*/
// DATA 1:
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);