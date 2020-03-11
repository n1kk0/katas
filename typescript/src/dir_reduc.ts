export function dirReduc(arr: string[]): string[] {
  const init: {[key: string]: string} = {
    'N': 'NORTH', 'S': 'SOUTH', 'E': 'EAST', 'W': 'WEST'
  };

  const str = arr.map((value) => value[0]).join('');
  const outputString = str.replace(/NS|SN|EW|WE/g, '');

  let output: string[];

  if (/NS|SN|EW|WE/.test(outputString)) {
      output = dirReduc(outputString.split('').map((value) => init[value]));
  } else {
      output = outputString.split('').map((value) => init[value]);
  }

  return output;
}
