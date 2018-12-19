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
}
