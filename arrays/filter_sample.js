// 2022-02-17 filter sample, https://www.youtube.com/watch?v=rRgD1yVwIvE
const companies = [
  { name: 'company one', category: 'finance', start: 1981, end: 2003 },
  { name: 'company two', category: 'retail', start: 1992, end: 2008 },
  { name: 'company three', category: 'auto', start: 1999, end: 2007 },
  { name: 'company four', category: 'retail', start: 1989, end: 2010 },
  { name: 'company five', category: 'technology', start: 2009, end: 2014 },
  { name: 'company six', category: 'finance', start: 1987, end: 2010 },
  { name: 'company seven', category: 'auto', start: 1986, end: 1996 },
  { name: 'company eight', category: 'technology', start: 2011, end: 2016 },
  { name: 'company nine', category: 'retail', start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// returns an array
const canDrink = ages.filter((age) => age >= 21);

console.log(canDrink);
