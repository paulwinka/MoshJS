// 2022-02-17 https://www.youtube.com/watch?v=rRgD1yVwIvE
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

// forEach

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach((company) => console.log(company));

// filter

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

const canDrink = ages.filter((age) => age >= 21);
// console.log(canDrink);

// const retailCompanies = companies.filter((company) => company.category === 'retail');
// console.log(retailCompanies);

// const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.start <= 1989);
// console.log(eightiesCompanies);

// const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);
// console.log(lastedTenYears);

// map - creates new arrays for

// const companyNames = companies.map((company) => company.name);
// console.log(companyNames);

// const companyNamesWithYears = companies.map((company) => `${company.name} [${company.end - company.start}]`);
// console.log(companyNamesWithYears);

// const sqrtAges = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// console.log(sqrtAges);

// sort USES TERNARY.

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

const sortedAge = ages.sort((a, b) => (a > b ? 1 : -1));
console.log(sortedAge);

// reduce - PROBABLY TAKES A TOTAL AS A PARAMETER, THEN THE THIGN SUMMED

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
  ageSum += ages[i];
}
console.log(ageSum);

const bigSum = ages.reduce((total, age) => total + age, 0);
console.log(bigSum);

const getTotalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(getTotalYears);

// combined

const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((total, age) => total + age, 0);
console.log(combined);
