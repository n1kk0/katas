export const findOdd = (xs: number[]): number => {
  let counts: {value: number, quantity: number}[] = [];

  xs.forEach((x) => {
    try {
      counts[counts.findIndex((item) => item.value == x)].quantity++;
    } catch(e) {
      counts.push({value: x, quantity: 1});
    }
  }, counts);

  return counts[counts.findIndex((item) => item.quantity % 2 == 1)].value;

  // best -> return xs.reduce((a, b)=> a ^ b);
};
