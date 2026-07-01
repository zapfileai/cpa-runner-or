const oregonCities = [
  "Junction City", "Keizer", "Keno", "Klamath Falls", "La Grande",
  "La Pine", "Lafayette", "Lake Oswego", "Lakeside", "Lakeview",
  "Lebanon", "Lexington", "Lincoln City", "Lowell", "Madras",
  "Malin", "Manzanita", "Mapleton", "Marcola", "Mcminnville",
  "Medford", "Merrill", "Mill City", "Milton Freewater", "Molalla",
  "Monmouth", "Monroe", "Mount Angel", "Mount Hood Parkdale", "Mulino",
  "Myrtle Creek", "Myrtle Point", "Neskowin", "Newberg", "Newport",
  "North Bend", "North Plains", "Oakridge", "Oceanside", "Odell",
  "Ontario", "Oregon City", "Otis", "Pacific City", "Pendleton",
  "Philomath", "Phoenix", "Pleasant Hill", "Port Orford", "Portland",
  "Powell Butte", "Prineville", "Rainier", "Redmond", "Reedsport",
  "Rhododendron", "Rickreall", "Rockaway Beach", "Rogue River", "Roseburg",
  "Saint Helens", "Saint Paul", "Salem", "Sandy", "Scappoose",
  "Scio", "Seaside", "Shady Cove", "Sheridan", "Sherwood",
  "Silverton", "Sisters", "South Beach", "Springfield", "Stayton",
  "Sublimity", "Summer Lake", "Sutherlin", "Sweet Home", "Talent",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < oregonCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(oregonCities[i]);
}

module.exports = { batches };
