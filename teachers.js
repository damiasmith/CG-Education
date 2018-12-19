var teacherName = "Susan Baylor";
var teacherDepartment = "Physics";
var teacherRating1 = 3.5;
var teacherRating2 = 1.0;
var teacherRating3 = 5.0;

var teacherAvgRating = (teacherRating1 + teacherRating2 + teacherRating3) / 3;
teacherAvgRating = Math.round( teacherAvgRating * 10 ) / 10;

console.log('Teacher: ' + teacherName);
console.log('Department: ' + teacherDepartment);
console.log('Ratings: ' + teacherAvgRating);

let teacherRating = [3.5, 1.0, 5.0];
console.log('Teacher Ratings: ' + teacherRating);

const getRatingAvg = (teacherRating) => teacherRating.reduce((a, b) => a + b) / teacherRating.length;
console.log(Math.round(getRatingAvg([3.5, 1.0, 5.0])))


const getAverageRating = (teacherRating) => teacherRating.reduce ((a, b) => a + b) / teacherRating.length;


console.log(Math.round(getAverageRating(teacherRating)));

let newRating = Math.floor((Math.random() * 5) + 1);
console.log(newRating);

teacherRating.push(newRating);

function addTeacherRating (){
  teacherRating.push(newRating);
  console.log(teacherRating);
}

addTeacherRating(teacherRating);

newRating = Number(prompt(`We would like for you to review ${teacherName}. Please enter a rating between 0.0 - 5.0.`));

if (newRating <= 5 && newRating >= 0) {
  alert(`Thanks for your review! ${teacherName} 's average rating is now ${getAverageRating(teacherRating)}.`);
} else if (newRating > 5 || newRating < 0 || newRating == null){
  newRating = Number(prompt(`We would like for you to review ${teacherName}. Please enter a rating between 0.0 - 5.0?`));
  alert(`Thanks for your review! ${teacherName}'s average rating is now ${getAverageRating(teacherRating)}.`);
}
