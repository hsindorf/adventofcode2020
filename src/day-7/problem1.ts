export function getShinyGoldBagBags(data: string[]): number {
  // First, put the data in the correct format (modeling relationship between child and its possible parents)

  const structuredData = {};
  data.forEach((line) => {
    const parent = line.match(/(.*) bags contain/)![1];
    const children = line.matchAll(/ (\d) (.+?) bags?/g);

    for (const child of children) {
      if (!structuredData[child[2]]) {
        structuredData[child[2]] = [parent];
      } else {
        structuredData[child[2]].push(parent);
      }
    }
  });

  // Then, follow each parent relationship of the shiny gold bag to see the different possible parents
  const possibleParents = new Set();

  const parentsToCheck: string[] = [];

  parentsToCheck.push(...structuredData['shiny gold']);

  while (parentsToCheck.length > 0) {
    const parent = parentsToCheck.shift()!;
    possibleParents.add(parent);
    if (structuredData[parent]) {
      parentsToCheck.push(...structuredData[parent]);
    }
  }

  return possibleParents.size;
}
