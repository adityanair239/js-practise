const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95

function bmi(m,h)
{
    return m / (h * h)
}

const BMIMark = bmi(massMark,heighMark);
const BMIJohn = bmi(massJohn,heightJohn);
console.log(BMIMark,BMIJohn);

