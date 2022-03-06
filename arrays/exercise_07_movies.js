const movies = [
  { title: 'a', year: 2018, rating: 4.5 },
  { title: 'b', year: 2018, rating: 4.7 },
  { title: 'c', year: 2018, rating: 3 },
  { title: 'd', year: 2017, rating: 4.5 },
];

// all the movies in 2018 with a rating > 4
// sort them by their rating
// descending order
// only pick title property and display on console = 'b', 'a'

const sortMovies = (array) => {
  myMovies = [...array];
  let output = myMovies
    .filter((movie) => movie.rating > 4 && movie.year === 2018)
    .sort((a, b) => (a > b ? 1 : -1))
    .map((movie) => movie.title);
  return output;
};

console.log(sortMovies(movies));
