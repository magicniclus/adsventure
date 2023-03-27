const agencys = [
  "Bordeaux",
  "Lyon",
  "Marseille",
  "Paris",
  "Toulouse",
  "Montpellier",
  "Nimes",
  "Tours",
  "La Rochelle",
  "Lilles",
  "Nice",
  "Annecy",
  "Brest",
  "Caen",
  "Dijon",
  "Grenoble",
  "Le Havre",
  "Le Mans",
  "Lorient",
  "Nantes",
  "Nancy",
  "Orléans",
  "Reims",
  "Rennes",
  "Rouen",
  "Strasbourg",
  "Toulon",
  "Tours",
  "Troyes",
  "Angers",
  "Béziers",
  "Bourges",
  "Chambéry",
  "Cherbourg",
  "Clermont-Ferrand",
  "Colmar",
  "Dunkerque",
  "Aix-en-Provence",
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
