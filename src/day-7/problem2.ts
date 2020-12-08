export function getShinyGoldBagBags(data: string[]): number {
  const structuredData = {};
  data.forEach((line) => {
    const parent = line.match(/(.*) bags contain/)![1];
    const children = line.matchAll(/ (\d) (.+?) bags?/g);

    structuredData[parent] = structuredData[parent] || [];

    for (const child of children) {
      structuredData[parent].push({
        color: child[2],
        count: child[1],
      });
    }
  });

  return getTotalChildren(structuredData, 'shiny gold');
}

function getTotalChildren(structuredData: {}, currentParent: string): number {
  let val = currentParent === 'shiny gold' ? 0 : 1;

  for (const child of structuredData[currentParent]) {
    val += child.count * getTotalChildren(structuredData, child.color);
  }

  return val;
}
