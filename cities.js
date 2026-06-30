const oregonCities = [
  // paste first 80 cities from cities.csv here
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oregonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oregonCities[i]);
}

module.exports = { batches };
