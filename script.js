let flavors = prompt(
  "What are your favorite Froyo flavors? Please seperate falvors by using a comma",
  "Berry"
);

let flavorsClean = flavors.replace(/ /g, "");
let flavorsSplit = flavorsClean.split(",");
const FlavorTotal = {};

for (let i = 0; i < flavorsSplit.length; i++) {
  if (flavorsSplit[i] in FlavorTotal) {
    FlavorTotal[flavorsSplit[i]] += 1;
  } else {
    FlavorTotal[flavorsSplit[i]] = 1;
  }
}
console.log(FlavorTotal);
