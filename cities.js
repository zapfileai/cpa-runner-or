const oregonCities = [
  "Albany", "Amity", "Antelope", "Ashland", "Astoria",
  "Athena", "Aumsville", "Aurora", "Baker City", "Bandon",
  "Banks", "Beatty", "Beavercreek", "Beaverton", "Bend",
  "Blue River", "Boardman", "Bonanza", "Boring", "Broadbent",
  "Brookings", "Brownsville", "Burns", "Canby", "Cannon Beach",
  "Canyon City", "Carlton", "Central Point", "Clackamas", "Clatskanie",
  "Cloverdale", "Colton", "Coos Bay", "Coquille", "Corbett",
  "Cornelius", "Corvallis", "Cottage Grove", "Creswell", "Dallas",
  "Damascus", "Dayton", "Depoe Bay", "Dundee", "Eagle Creek",
  "Eagle Point", "Elgin", "Elkton", "Elmira", "Enterprise",
  "Estacada", "Eugene", "Fairview", "Florence", "Forest Grove",
  "Garibaldi", "Gaston", "Gervais", "Gilchrist", "Gladstone",
  "Gleneden Beach", "Gold Beach", "Gold Hill", "Grand Ronde", "Grants Pass",
  "Gresham", "Halsey", "Hammond", "Happy Valley", "Harrisburg",
  "Heppner", "Hermiston", "Hillsboro", "Hood River", "Independence",
  "Ione", "Jacksonville", "Jefferson", "John Day", "Joseph",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oregonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oregonCities[i]);
}

module.exports = { batches };
