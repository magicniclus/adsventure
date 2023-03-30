const agencys = [
  "Bordeaux",
  "Lyon",
  "Marseille",
  "Paris",
  "Toulouse",
  "Montpelier",
  "Cannes",
  "Nice",
];

function slugify(city) {
  const firstLetter = city.charAt(0).toLowerCase();
  const restOfString = city.slice(1);
  return firstLetter + restOfString.replace(/ /g, "-");
}

export const getAgencys = agencys.map((city, index) => {
  return {
    id: index + 1,
    title: city,
    slug: slugify(city),
  };
});
