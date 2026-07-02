const oregonCities = [
  "Terrebonne", "The Dalles", "Tillamook", "Troutdale", "Tualatin",
  "Turner", "Umatilla", "Umpqua", "Union", "Veneta",
  "Vernonia", "Waldport", "Walterville", "Warren", "Warrenton",
  "Welches", "West Linn", "Weston", "White City", "Wilbur",
  "Willamina", "Wilsonville", "Winchester", "Woodburn", "Yachats",
  "Yamhill",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oregonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oregonCities[i]);
}

module.exports = { batches };
