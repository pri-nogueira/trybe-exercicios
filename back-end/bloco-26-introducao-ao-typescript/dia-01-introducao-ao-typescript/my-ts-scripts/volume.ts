//Exercicio 6

const unitsVolume = ['km³', 'hm³', 'dam³', 'm³', 'dm³', 'cm³', 'mm³'];

function convertVolume(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = unitsVolume.indexOf(fromUnit);
  const toIndex = unitsVolume.indexOf(toUnit);
  const exponent = toIndex - fromIndex;

  return value * Math.pow(1000, exponent);
}