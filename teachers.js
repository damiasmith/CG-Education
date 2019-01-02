var teacherName = "Susan Baylor";
let teacherRating = [3.5, 1.0, 5.0];

let newRating = Number(prompt(`We would like for you to review ${teacherName}. Please enter a rating between 0.0 - 5.0.`));

function addTeacherRating(teacherRating){
  if (newRating <= 5 && newRating >= 0){
    teacherRating.push(newRating),
    console.log(teacherRating);
  }
};


const getAverageRating = (teacherRating) => teacherRating.reduce ((a, b) => a + b) / teacherRating.length;
  Math.round(getAverageRating(teacherRating) * 10) / 10;



 /*if (newRating <= 5 && newRating >= 0) {
   alert('Thanks for your review! ' + `${teacherName}` + '\'s average rating is now ' + `${getAverageRating(teacherRating)}` + '.');
 } else if (newRating > 5 || newRating < 0){
   newRating = Number(prompt('We would like for you to review ' + `${teacherName}` + '. Please enter a rating between 0.0 - 5.0?'));
   alert('Thanks for your review! ' + `${teacherName}` + '\'s average rating is now ' + `${getAverageRating(teacherRating)}` + '.');
 }*/


while(true){
  if (newRating <= 5 && newRating >= 0){
    addTeacherRating(teacherRating),
    getAverageRating(teacherRating),
    console.log(teacherRating),
    alert(`Thanks for your review! ${teacherName} 's average rating is now ${getAverageRating(teacherRating)}.`)
    break;
  }
  if (newRating > 5 || newRating < 0){
    newRating = Number(prompt(`We would like for you to review ${teacherName}. Please enter a rating between 0.0 - 5.0.`));
  }
  if (newRating == null){
    newRating = Number(prompt(`We would like for you to review ${teacherName}. Please enter a rating between 0.0 - 5.0.`));
  }
};
console.log(teacherRating);
