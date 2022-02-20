// must use the 'find' method for reference types, not .includes

const courses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const course = courses.find((course) => course.id === 1 && course.name === 'a');
console.log(course);

// now using findIndex

const xcourses = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
];

const xcourse = xcourses.findIndex((xcourse) => xcourse.id === 2 && xcourse.name === 'b');
console.log(xcourse);
