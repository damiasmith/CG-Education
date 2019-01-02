console.log('This file is linked!');

let teacherName1 = 'Sally Jones';
var departmentName = 'Physics';
const ratings = [3.4, 5.0, 4.2];
console.log('Teacher: ' + teacherName1);
console.log('Department: ' + departmentName);
console.log('Ratings: ' + ratings);
const averageRating = ([3.4 + 5 + 4.2] / 3);
console.log('Average Rating: ' + averageRating);

var courseName = 'Physics 107';
var teacher = 'Sally Jones';
var semester = 'Fall 2018';
console.log(`Course: ${courseName}
` + `Teacher: ${teacher}
` + `Semester: ${semester}`);

var studentName = 'Matt Smith';
var email = 'msmith@csa.edu';
var major = 'Physics';
var GPA = 3.98;
console.log(`Student: ${studentName}
` + `Email: ${email}
` + `Major: ${major}
` + `GPA: ${GPA}`);

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

/*const getAverageRating = (teacherRating) => teacherRating.reduce ((a, b) => a + b) / teacherRating.length;


console.log(Math.round(getAverageRating(teacherRating)));

let newRating = Math.floor((Math.random() * 5) + 1);
console.log(newRating);

teacherRating.push(newRating);

function addTeacherRating (){
  teacherRating.push(newRating);
  console.log(teacherRating);
}

addTeacherRating(teacherRating);

newRating = Number(prompt('We would like for you to review ' + `${teacherName}` + '. Please enter a rating between 0.0 - 5.0.'));

if (newRating <= 5 && newRating >= 0) {
  alert('Thanks for your review! ' + `${teacherName}` + '\'s average rating is now ' + `${getAverageRating(teacherRating)}` + '.');
} else if (newRating > 5 || newRating < 0){
  newRating = Number(prompt('We would like for you to review ' + `${teacherName}` + '. Please enter a rating between 0.0 - 5.0?'));
  alert('Thanks for your review! ' + `${teacherName}` + '\'s average rating is now ' + `${getAverageRating(teacherRating)}` + '.');
}



let courses = [
                ['Sculpture 105', 'Visual Art'] ,
                ['Figure Painting 124', 'Visual Art'] ,
                ['Physics 107', 'Physics and Astronomy'] ,
                ['Metalsmithing & Jewelry 109', 'Visual Art'] ,
                ['Anatomy & Physiology 132', 'Biology']
              ];

let deptCourses = []
const filterCourses = (query) => {
      return courses.filter((deptCourses) =>
      deptCourses.indexOf(query) > -1
    );
}

console.log(filterCourses(deptCourses));

deptCourses = (prompt('For which department would you like to to see available classes? Please enter the department name.'));

if (deptCourses === 'Visual Art', 'Physics and Astronomy', 'Biology'){
  alert(`These courses are available in this department: ${filterCourses(deptCourses)}`);
} else if (deptCourses !== 'Visual Art', 'Physics and Astronomy', 'Biology'){
  prompt(`Which department would you like to to see available classes? Please enter the department name.`);
  alert(`These courses are available in this department: ${filterCourses(deptCourses)}`);
}*/
