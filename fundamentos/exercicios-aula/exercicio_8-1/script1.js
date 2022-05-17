const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

repeat(4, (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
});