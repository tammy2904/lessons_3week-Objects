const student = {
    id: 1,
    programmingLanguage: 'Javascript',
    hasExperienceInReact: false,
};
// adding Elements
student.experience = 6;
console.log('student', student);
// removing elements

delete student.experience;
console.log('student after deleting experience', student);
delete student.hasExperienceInReact; 
console.log('student after removing hasExperienceInReact', student);
// changing elements
student.programmingLanguage = 'Java';
