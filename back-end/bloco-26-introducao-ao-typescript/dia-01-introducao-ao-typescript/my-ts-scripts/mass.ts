//Exercicio 3

const unitsTwo = ['kg', 'hg', 'dag', 'g', 'dg', 'cg', 'mg'];

function convertTwo(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsTwo.indexOf(fromUnit);
  const toIndex = unitsTwo.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(10, exponent);
}